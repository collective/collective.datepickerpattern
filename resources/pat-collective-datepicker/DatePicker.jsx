// resources/pat-collective-datepicker/DatePicker.jsx
import React from "react";
import {
    DatePicker as AriaDatePicker,
    Group,
    Label,
    Description,
    FieldError,
    DateInput,
    DateSegment,
    Button,
    Popover,
    Dialog,
    Calendar,
    CalendarGrid,
    CalendarGridHeader,
    CalendarHeaderCell,
    CalendarGridBody,
    CalendarCell,
    Heading,
    I18nProvider,
    TimeField,
} from "react-aria-components";
import _t from "@plone/mockup/src/core/i18n-wrapper";

const DatePickerComponent = ({
    label,
    description,
    errorMessage,
    locale,
    onChange,
    pickerType,
    defaultValue,
    timeFieldLabel = _t("Select a time"),
    ...props
}) => {
    const commonProps = {
        ...props,
        onChange,
        shouldForceLeadingZeros: true,
    };
    if (defaultValue === null && pickerType === "datetime-local") {
        commonProps.defaultValue = undefined;
    } else {
        commonProps.defaultValue = defaultValue;
    }

    const content = (
        <>
            <Label>{label}</Label>
            <Group>
                <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
                <Button>🗓️</Button>
            </Group>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover>
                <Dialog>
                    <Calendar>
                        <header>
                            <Button slot="previous">◀</Button>
                            <Heading />
                            <Button slot="next">▶</Button>
                        </header>
                        <CalendarGrid>
                            <CalendarGridHeader>
                                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
                            </CalendarGridHeader>
                            <CalendarGridBody>
                                {(date) => <CalendarCell date={date} />}
                            </CalendarGridBody>
                        </CalendarGrid>
                    </Calendar>
                </Dialog>
            </Popover>
        </>
    );

    return (
        <I18nProvider locale={locale}>
            <AriaDatePicker
                {...commonProps}
                granularity={pickerType === "datetime-local" ? "minute" : "day"}
            >
                {content}
            </AriaDatePicker>
        </I18nProvider>
    );
};

export default DatePickerComponent;
