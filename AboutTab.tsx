import { Heart, Award, Users, Clock, Target, Shield, Stethoscope, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutTab = () => {
  const stats = [
    { icon: Users, label: "مريض راضي", value: "15,000+", color: "text-blue-600" },
    { icon: Clock, label: "سنوات خبرة", value: "12+", color: "text-green-600" },
    { icon: Award, label: "أخصائي محترف", value: "50+", color: "text-purple-600" },
    { icon: Heart, label: "نسبة الشفاء", value: "95%", color: "text-red-600" }
  ];

  const features = [
    {
      icon: Target,
      title: "أهدافنا",
      description: "نسعى لتوفير أفضل خدمات العلاج الطبيعي باستخدام أحدث الطرق والتقنيات العالمية"
    },
    {
      icon: Shield,
      title: "الأمان والجودة",
      description: "نضمن أعلى معايير الأمان والنظافة مع فريق طبي مُدرب على أعلى مستوى"
    },
    {
      icon: Stethoscope,
      title: "التقنيات المتقدمة",
      description: "نستخدم أحدث الأجهزة والتقنيات في مجال العلاج الطبيعي وإعادة التأهيل"
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "فريق من أفضل أخصائيي العلاج الطبيعي مع سنوات خبرة واسعة في المجال"
    }
  ];

  const services = [
    "علاج طبيعي عام لجميع الأعمار",
    "إعادة تأهيل الإصابات الرياضية",
    "علاج آلام الظهر والرقبة",
    "علاج طبيعي للأطفال",
    "علاج طبيعي لكبار السن",
    "تأهيل ما بعد العمليات الجراحية",
    "علاج اضطرابات الحركة",
    "علاج الشلل النصفي",
    "تأهيل الحوادث والكسور",
    "علاج التشوهات الخلقية"
  ];

  return (
    <div className="animate-fade-in-up" dir="rtl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-6 font-cairo flex items-center justify-center gap-3">
          <Heart className="w-10 h-10 text-red-500" />
          PhysioCare
        </h2>
        <p className="text-lg text-muted-foreground font-cairo max-w-3xl mx-auto leading-relaxed">
          مركز PhysioCare هو واحد من أرقى مراكز العلاج الطبيعي في مصر، نقدم خدمات طبية متميزة 
          باستخدام أحدث التقنيات والأساليب العلاجية المبتكرة منذ عام 2012
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2 font-cairo">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-cairo">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-primary text-center mb-8 font-cairo">
          لماذا تختار PhysioCare؟
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2 font-cairo">{feature.title}</h4>
                      <p className="text-muted-foreground font-cairo leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-primary text-center mb-8 font-cairo">
          خدماتنا الطبية
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-cairo text-sm">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardContent className="p-0">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-6 font-cairo">رسالتنا</h3>
            <p className="text-lg text-muted-foreground font-cairo leading-relaxed mb-6">
              نحن ملتزمون بتقديم أفضل رعاية طبية في مجال العلاج الطبيعي، وإعادة المرضى إلى 
              حياتهم الطبيعية بأسرع وقت ممكن وبأقل ألم. نؤمن بأن كل مريض يستحق العناية الشخصية 
              والعلاج المخصص لحالته الفردية.
            </p>
            <div className="flex justify-center items-center gap-4 text-primary">
              <Heart className="w-6 h-6" />
              <span className="font-cairo font-semibold">صحتك أولويتنا</span>
              <Heart className="w-6 h-6" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-primary mb-6 font-cairo">الاعتمادات والشهادات</h3>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-cairo text-sm">معتمد من وزارة الصحة</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-cairo text-sm">شهادة الجودة ISO 9001</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="font-cairo text-sm">عضو الجمعية المصرية للعلاج الطبيعي</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
