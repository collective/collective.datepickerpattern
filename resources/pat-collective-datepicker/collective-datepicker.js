import { BasePattern } from "@patternslib/patternslib/src/core/basepattern";
import I18n from "@plone/mockup/src/core/i18n";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";
import React from "react";
import ReactDOM from "react-dom/client";
import DatePickerComponent from "./DatePicker.jsx"; // Import the new React component
import {
    parseDate,
    parseDateTime,
    getLocalTimeZone,
    ZonedDateTime,
} from "@internationalized/date";

import "./collective-datepicker.scss";
import _t from "@plone/mockup/src/core/i18n-wrapper";
export const parser = new Parser("collective-datepicker");
parser.addArgument("locale", null);
parser.addArgument("label", _t("Select a date")); // Add a default label

class Pattern extends BasePattern {
    static name = "collective-datepicker";
    static trigger = ".pat-collective-datepicker";
    static parser = parser;

    async init() {
        // The options are automatically created, if parser is defined.
        const label = this.options.label;

        // Get locale from data-attribute option.
        let locale = this.options.locale;
        if (!locale) {
            // If not set, get it from Plone's lang attribute on <html> tag.
            // Fallback to 'en' if not found.
            const i18n = new I18n();
            locale = i18n.currentLanguage;
        }

        // Create a new container element for the React component.
        const container = document.createElement("div");
        // Insert the new container right after the original element.
        this.el.after(container);

        // Find the target input once and memoize it to keep a stable reference.
        const targetInput =
            this.el.tagName === "INPUT" ? this.el : this.el.querySelector("input");

        const pickerType = targetInput?.type || "date";

        // Get the initial value from the input to set it in the DatePicker.
        let defaultValue;
        if (targetInput && targetInput.value) {
            if (pickerType === "datetime-local") {
                try {
                    const parsedDateTime = parseDateTime(targetInput.value); // This returns a CalendarDateTime
                    defaultValue = new ZonedDateTime(
                        parsedDateTime.year,
                        parsedDateTime.month,
                        parsedDateTime.day,
                        getLocalTimeZone(),
                        0, // offset is typically 0 for local timezone when constructing from CalendarDateTime
                        parsedDateTime.hour,
                        parsedDateTime.minute,
                        parsedDateTime.second,
                        parsedDateTime.millisecond,
                    );
                } catch (e) {
                    // Handle case where empty string or invalid date is passed
                    console.warn(
                        `Could not parse datetime-local value: ${targetInput.value}`,
                        e,
                    );
                    defaultValue = null;
                }
            } else {
                defaultValue = parseDate(targetInput.value);
            }
        } else {
            defaultValue = null;
        }

        const onDateChange = (date) => {
            if (targetInput) {
                let formattedDate = "";
                if (date) {
                    if (
                        pickerType === "datetime-local" &&
                        date instanceof ZonedDateTime
                    ) {
                        formattedDate = `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}T${String(date.hour).padStart(2, "0")}:${String(date.minute).padStart(2, "0")}`;
                    } else {
                        formattedDate = date.toString();
                    }
                }
                targetInput.value = formattedDate;
                // Dispatch an event to notify other frameworks of the change.
                const event = new Event("input", {
                    bubbles: true,
                    cancelable: true,
                });
                targetInput.dispatchEvent(event);

                console.log(formattedDate);
                console.log(targetInput.value);
            }
        };

        // Expose onDateChange for testing
        this.onDateChange = onDateChange;

        const root = ReactDOM.createRoot(container);
        root.render(
            <DatePickerComponent
                label={label}
                locale={locale}
                pickerType={pickerType}
                defaultValue={defaultValue}
                onChange={onDateChange}
            />,
        );

        // Hide the original element, as it's now replaced by the React component.
        // We use a class for more flexible styling.
        this.el.classList.add("pat-collective-datepicker-original-input");
    }
}

// Register Pattern class in the global pattern registry and make it usable there.
registry.register(Pattern);

// Export Pattern as default export.
// You can import it as ``import AnyName from "./collective-datepicker";``
export default Pattern;
// Export BasePattern as named export.
// You can import it as ``import { Pattern } from "./collective-datepicker";``
export { Pattern };
