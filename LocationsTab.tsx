import { MapPin, Phone, Clock, Navigation, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LocationsTab = () => {
  const locations = [
    {
      id: 1,
      name: "فرع المعادي",
      address: "شارع النصر، المعادي الجديدة، القاهرة",
      phone: "02-25556666",
      hours: "السبت - الخميس: 9 ص - 9 م",
      rating: 4.8,
      reviews: 156,
      services: ["علاج طبيعي عام", "إعادة تأهيل رياضي", "علاج آلام الظهر"],
      coordinates: { lat: 29.9567, lng: 31.2635 }
    },
    {
      id: 2,
      name: "فرع التجمع الخامس",
      address: "التسعين الجنوبي، التجمع الخامس، القاهرة الجديدة",
      phone: "02-26667777",
      hours: "السبت - الخميس: 9 ص - 9 م",
      rating: 4.9,
      reviews: 203,
      services: ["علاج طبيعي للأطفال", "تأهيل ما بعد العمليات", "علاج طبيعي لكبار السن"],
      coordinates: { lat: 30.0296, lng: 31.4396 }
    },
    {
      id: 3,
      name: "فرع النصر",
      address: "شارع أحمد فخري، مدينة نصر، القاهرة",
      phone: "02-24448888",
      hours: "السبت - الخميس: 9 ص - 9 م",
      rating: 4.7,
      reviews: 134,
      services: ["علاج طبيعي عام", "علاج آلام الرقبة", "إعادة تأهيل الحوادث"],
      coordinates: { lat: 30.0626, lng: 31.3283 }
    },
    {
      id: 4,
      name: "فرع الزمالك",
      address: "شارع 26 يوليو، الزمالك، القاهرة",
      phone: "02-27779999",
      hours: "السبت - الخميس: 9 ص - 9 م",
      rating: 4.9,
      reviews: 198,
      services: ["علاج طبيعي متقدم", "علاج اليدين والقدمين", "تأهيل الإصابات المزمنة"],
      coordinates: { lat: 30.0618, lng: 31.2194 }
    },
    {
      id: 5,
      name: "فرع 6 أكتوبر",
      address: "الحي الثاني عشر، 6 أكتوبر، الجيزة",
      phone: "02-38881111",
      hours: "السبت - الخميس: 9 ص - 9 م",
      rating: 4.6,
      reviews: 89,
      services: ["علاج طبيعي شامل", "علاج العمود الفقري", "تأهيل حركي متطور"],
      coordinates: { lat: 29.9553, lng: 30.9219 }
    }
  ];

  return (
    <div className="animate-fade-in-up" dir="rtl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4 font-cairo flex items-center justify-center gap-3">
          <MapPin className="w-8 h-8" />
          مواقع فروعنا
        </h2>
        <p className="text-muted-foreground font-cairo">
          اختر الفرع الأقرب إليك من 5 مواقع متميزة في القاهرة الكبرى
        </p>
      </div>

      {/* Map Placeholder */}
      <Card className="mb-8 overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="text-center z-10">
            <Navigation className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary font-cairo mb-2">خريطة تفاعلية</h3>
            <p className="text-muted-foreground font-cairo">قريباً - خريطة تفاعلية لجميع فروعنا</p>
          </div>
        </div>
      </Card>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((location) => (
          <Card key={location.id} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary font-cairo mb-2">
                    {location.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(location.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-primary">{location.rating}</span>
                    <span className="text-sm text-muted-foreground">({location.reviews} تقييم)</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                  <p className="text-sm font-cairo text-muted-foreground">{location.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <p className="text-sm font-cairo text-primary font-semibold">{location.phone}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <p className="text-sm font-cairo text-muted-foreground">{location.hours}</p>
                </div>
              </div>

              {/* Services */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-primary font-cairo mb-2">الخدمات المتاحة:</h4>
                <div className="flex flex-wrap gap-1">
                  {location.services.map((service, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-accent/20 text-primary text-xs rounded-full font-cairo"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1 font-cairo"
                  onClick={() => window.open(`tel:${location.phone}`, '_self')}
                >
                  <Phone className="w-4 h-4 ml-2" />
                  اتصال
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 font-cairo"
                  onClick={() => window.open(`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`, '_blank')}
                >
                  <Navigation className="w-4 h-4 ml-2" />
                  الاتجاهات
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
        <h3 className="text-xl font-bold text-primary font-cairo mb-2">
          هل تحتاج مساعدة في اختيار الفرع المناسب؟
        </h3>
        <p className="text-muted-foreground font-cairo mb-4">
          تواصل معنا وسنساعدك في اختيار أقرب فرع وأنسب موعد لك
        </p>
        <Button size="lg" className="font-cairo">
          <Phone className="w-5 h-5 ml-2" />
          اتصل بنا الآن - 19999
        </Button>
      </div>
    </div>
  );
};

export default LocationsTab;
