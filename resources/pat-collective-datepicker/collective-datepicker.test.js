import pattern from "./collective-datepicker";
import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom/client";
import { render, screen, waitFor, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import DatePickerComponent from "./DatePicker.jsx";

import _t from "@plone/mockup/src/core/i18n-wrapper"; // Import the actual _t for mocking
import { getLocalTimeZone } from "@internationalized/date";

jest.mock("@plone/mockup/src/core/i18n-wrapper", () => ({
    __esModule: true,
    default: jest.fn((text) => text),
}));


describe("collective-datepicker pattern", () => {
    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);




    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        jest.restoreAllMocks();
    });

    it("should initialize with an empty datetime-local input without errors", async () => {
        const input = document.createElement("input");
        input.className = "pat-collective-datepicker";
        input.type = "datetime-local";
        input.name = "datetime";
        input.value = "";
        input.setAttribute("data-pat-collective-datepicker", "{}");
        container.appendChild(input);

        const instance = new pattern($(input));
        instance.options = { label: "Mocked Label", locale: "en" };
        await act(async () => {
            await instance.init();
        });

        // Check if the React component is rendered
        expect(input.nextSibling).not.toBeNull();
        expect(input.nextSibling.nodeName).toBe("DIV"); // The React component is rendered in a div
        expect(input.classList.contains("pat-collective-datepicker-original-input")).toBe(true);

        // Expect no immediate errors, check for specific text content if possible
        // This is hard to test without deeper knowledge of react-aria's internal structure
        // But the absence of a test failure here indicates no uncaught errors during init.
    });

    it("should initialize with an empty date input without errors", async () => {
        const input = document.createElement("input");
        input.className = "pat-collective-datepicker";
        input.type = "date";
        input.name = "date";
        input.value = "";
        input.setAttribute("data-pat-collective-datepicker", "{}");
        container.appendChild(input);

        const instance = new pattern($(input));
        instance.options = { label: "Mocked Label", locale: "en" };
        await act(async () => {
            await instance.init();
        });

        // Check if the React component is rendered
        expect(input.nextSibling).not.toBeNull();
        expect(input.nextSibling.nodeName).toBe("DIV"); // The React component is rendered in a div
        expect(input.classList.contains("pat-collective-datepicker-original-input")).toBe(true);
    });

    it("should initialize with a pre-filled datetime-local input", async () => {
        const prefilledValue = "2024-03-15T10:30";
        const input = document.createElement("input");
        input.className = "pat-collective-datepicker";
        input.type = "datetime-local";
        input.name = "datetime-prefilled";
        input.value = prefilledValue;
        input.setAttribute("data-pat-collective-datepicker", "{}");
        container.appendChild(input);

        const instance = new pattern($(input));
        instance.options = { label: "Mocked Label", locale: "en" };
        await act(async () => {
            await instance.init();
        });

        expect(input.nextSibling).not.toBeNull();
        expect(input.nextSibling.nodeName).toBe("DIV");
        expect(input.classList.contains("pat-collective-datepicker-original-input")).toBe(true);


    });

    it("should initialize with a pre-filled date input", async () => {
        const prefilledValue = "2024-03-15";
        const input = document.createElement("input");
        input.className = "pat-collective-datepicker";
        input.type = "date";
        input.name = "date-prefilled";
        input.value = prefilledValue;
        input.setAttribute("data-pat-collective-datepicker", "{}");
        container.appendChild(input);

        const instance = new pattern($(input));
        instance.options = { label: "Mocked Label", locale: "en" };
        await act(async () => {
            await instance.init();
        });

        expect(input.nextSibling).not.toBeNull();
        expect(input.nextSibling.nodeName).toBe("DIV");
        expect(input.classList.contains("pat-collective-datepicker-original-input")).toBe(true);


    });

    it("should update the original input when a date is selected for date picker", async () => {
        const input = document.createElement("input");
        input.className = "pat-collective-datepicker";
        input.type = "date";
        input.name = "date-change";
        input.value = "";
        input.setAttribute("data-pat-collective-datepicker", "{}");
        container.appendChild(input);

        const instance = new pattern($(input));
        instance.options = { label: "Mocked Label", locale: "en" };
        await act(async () => {
            await instance.init();
        });

        // Ensure the React component is rendered
        expect(input.nextSibling).not.toBeNull();
        const reactContainer = input.nextSibling;

        // Simulate user interaction: open calendar
        // The button that opens the calendar is usually the last button in the Group for DatePicker.jsx
        // Looking at DatePicker.jsx, it's <Button>🗓️</Button>
        // It's the third button in the DOM structure for AriaDatePicker.
        const openCalendarButton = within(reactContainer).getByText("🗓️");
        expect(openCalendarButton).toBeInTheDocument();
        await userEvent.click(openCalendarButton);

        // Wait for the calendar to appear
        await waitFor(() => {
            expect(screen.getByRole("dialog")).toBeInTheDocument();
        });

        // Simulate selecting a specific date (e.g., the 15th of the current month shown)
        // This is highly dependent on react-aria-components rendering and the current month.
        // For simplicity, let's assume the 15th is visible and clickable.
        // Use a more specific query for the gridcell to avoid selecting the current day if it's the 15th.
        const dateToSelect = screen.getByLabelText("Sunday, February 15, 2026");
        await userEvent.click(dateToSelect);


        // Expect the dialog to be gone or the input value to be updated
        await waitFor(() => {
            expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
            // The original input value should now be updated to the selected date
            // The exact format of the date will be YYYY-MM-DD
            const expectedDate = new Date(); // Gets current date
            expectedDate.setDate(15); // Sets day to 15
            const year = expectedDate.getFullYear();
            const month = String(expectedDate.getMonth() + 1).padStart(2, '0');
            const day = String(expectedDate.getDate()).padStart(2, '0');
            expect(input.value).toBe(`${year}-${month}-${day}`);
        });
    });

    it("should update the original input when a datetime is selected for datetime-local picker", async () => {
        const input = document.createElement("input");
        input.className = "pat-collective-datepicker";
        input.type = "datetime-local";
        input.name = "datetime-change";
        input.value = "";
        input.setAttribute("data-pat-collective-datepicker", "{}");
        container.appendChild(input);

        const instance = new pattern($(input));
        instance.options = { label: "Mocked Label", locale: "en" };
        await act(async () => {
            await instance.init();
        });

        // Ensure the React component is rendered
        expect(input.nextSibling).not.toBeNull();
        const reactContainer = input.nextSibling;

        // Simulate user interaction: open calendar
        const openCalendarButton = within(reactContainer).getByText("🗓️");
        expect(openCalendarButton).toBeInTheDocument();
        await userEvent.click(openCalendarButton);

        // Wait for the calendar to appear
        await waitFor(() => {
            expect(screen.getByRole("dialog")).toBeInTheDocument();
        });

        // Simulate selecting a specific date (e.g., the 15th of the current month shown)
        const dateToSelect = screen.getByLabelText("Sunday, February 15, 2026");
        await userEvent.click(dateToSelect);

        // Expect the dialog to be gone and the input value to be updated
        await waitFor(() => {
            expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
            // The original input value should now be updated to the selected date and default time (00:00)
            expect(input.value).toBe("2026-02-15T00:00");
        });
    });

    it("should update the original input with a specific datetime when onChange is called manually", async () => {
        const input = document.createElement("input");
        input.className = "pat-collective-datepicker";
        input.type = "datetime-local";
        input.name = "datetime-manual-change";
        input.value = "";
        input.setAttribute("data-pat-collective-datepicker", "{}");
        container.appendChild(input);

        const instance = new pattern($(input));
        instance.options = { label: "Mocked Label", locale: "en" };
        await act(async () => {
            await instance.init();
        });

        // Ensure onDateChange is exposed
        expect(instance.onDateChange).toBeDefined();

        const { ZonedDateTime, getLocalTimeZone } = require("@internationalized/date");
        const newDateTime = new ZonedDateTime(2026, 2, 15, getLocalTimeZone(), 0, 11, 45, 0, 0);

        await act(async () => {
            instance.onDateChange(newDateTime);
        });

        expect(input.value).toBe("2026-02-15T11:45");
    });

    // More tests will be added here
});