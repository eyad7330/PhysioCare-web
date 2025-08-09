import React from 'react';
import Card from './Card'; // 🔴 استيراد المكون العام

const AppointmentCard = ({ appointment }) => {
  return (
    <Card title={appointment.date} className="appointment-card">
      <p><strong>المريض:</strong> {appointment.patientName}</p>
      <p><strong>ملاحظات:</strong> {appointment.notes}</p>
    </Card>
  );
};

export default AppointmentCard;
