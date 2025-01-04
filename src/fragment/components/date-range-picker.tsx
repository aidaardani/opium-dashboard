import { CodeComponentMeta } from "@plasmicapp/host";
import {
  Calendar,
  DayValue,
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

import React, { useState } from "react";

type VacationDate = {
  from: DayValue | any;
  to: DayValue | any;
};

export const DateRangePicker = ({
  locale = "fa",
  onChange,
  selectedDays,
}: any) => {
  const [selectedDay, setSelectedDay] = useState<VacationDate>({
    from: selectedDays.from,
    to: selectedDays.to,
  });
  return (
    <>
      <Calendar
        value={selectedDay}
        onChange={(val) => {
          onChange(val);
          setSelectedDay(val);
        }}
        shouldHighlightWeekends
        minimumDate={utils(locale).getToday()}
        colorPrimary="#0070f3"
        locale={locale}
        calendarRangeStartClassName="!rounded-md"
        calendarRangeEndClassName="!rounded-md"
        calendarRangeBetweenClassName="!rounded-md"
        calendarClassName="!shadow-none !py-0 !bg-transparent"
      />
    </>
  );
};

export const dateRangePicker: CodeComponentMeta<any> = {
  name: "DateRangePicker",
  displayName: "Fragment/DateRangePicker",
  importPath: "@/fragment/components/date-range-picker",
  props: {
    selectedDays: {
      type: "object",
      defaultValue: {
        from: null,
        to: null,
      },
    },
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "from",
          type: "object",
        },
        {
          name: "to",
          type: "object",
        },
      ],
    },
    locale: {
      defaultValue: "fa",
      type: "choice",
      options: ["fa", "en"],
    },
  },
  states: {
    selectedDays: {
      type: "writable",
      variableType: "object",
      valueProp: "selectedDays",
      onChangeProp: "onChange",
    },
  },
};
