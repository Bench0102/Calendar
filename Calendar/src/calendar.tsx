import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';

// Import appointments data from month-appointment.tsx
import { appointments } from './month-appointment';

const Calendar: React.FunctionComponent = () => {
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date(2018, 6, 23));  // Default date
  const [currentViewName, setCurrentViewName] = React.useState<string>('week');  // Starting with 'week' view

  // Method to handle view change
  const currentViewNameChange = (newViewName: string) => {
    setCurrentViewName(newViewName);
  };

  return (
    <Paper>
      <Scheduler data={appointments} height={660}>
        {/* ViewState to manage the current date and view */}
        <ViewState
          defaultCurrentDate={currentDate}
          currentDate={currentDate}
          onCurrentDateChange={setCurrentDate}
          currentViewName={currentViewName}
          onCurrentViewNameChange={currentViewNameChange} // Handle view change
        />

        {/* Views */}
        <DayView startDayHour={7} endDayHour={12} />
        <WeekView startDayHour={9} endDayHour={19} />
        <MonthView />

        {/* Toolbar and ViewSwitcher for navigation */}
        <Toolbar />
        <ViewSwitcher />

        {/* Appointments list */}
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default Calendar;
