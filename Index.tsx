// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
import { useState } from "react";
import Header from "@/components/Header";
import NavTabs from "@/components/NavTabs";
import MainContainer from "@/components/MainContainer";
import BookingForm from "@/components/BookingForm";
import ContactForm from "@/components/ContactForm";
import LocationsTab from "@/components/LocationsTab";
import AboutTab from "@/components/AboutTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("booking");

  const renderTabContent = () => {
    switch (activeTab) {
      case "booking":
        return <BookingForm />;
      case "contact":
        return <ContactForm />;
      case "locations":
        return <LocationsTab />;
      case "about":
        return <AboutTab />;
      default:
        return <BookingForm />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <MainContainer>
        {renderTabContent()}
      </MainContainer>
    </div>
  );
};

export default Index;
