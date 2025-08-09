import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, User, Phone, MapPin, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون أكثر من حرفين"),
  phone: z.string().min(11, "رقم الهاتف غير صحيح"),
  service: z.string().min(1, "يرجى اختيار نوع الخدمة"),
  date: z.string().min(1, "يرجى اختيار تاريخ الموعد"),
  time: z.string().min(1, "يرجى اختيار وقت الموعد"),
  location: z.string().min(1, "يرجى اختيار الموقع"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      location: "",
      notes: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "تم حجز الموعد بنجاح! ✅",
        description: "سيتم التواصل معك قريباً لتأكيد الموعد",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "علاج طبيعي عام",
    "إعادة تأهيل الإصابات الرياضية",
    "علاج آلام الظهر والرقبة",
    "علاج طبيعي للأطفال",
    "علاج طبيعي لكبار السن",
    "تأهيل ما بعد العمليات الجراحية"
  ];

  const timeSlots = [
    "9:00 صباحاً",
    "10:00 صباحاً",
    "11:00 صباحاً",
    "12:00 ظهراً",
    "1:00 ظهراً",
    "2:00 ظهراً",
    "3:00 عصراً",
    "4:00 عصراً",
    "5:00 عصراً",
    "6:00 مساءً"
  ];

  const locations = [
    "فرع المعادي",
    "فرع النصر",
    "فرع التجمع الخامس",
    "فرع الزمالك",
    "فرع مدينة نصر"
  ];

  return (
    <div className="animate-fade-in-up" dir="rtl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4 font-cairo flex items-center justify-center gap-3">
          <Calendar className="w-8 h-8" />
          احجز موعدك الآن
        </h2>
        <p className="text-muted-foreground font-cairo">
          املأ البيانات التالية وسيتم التواصل معك لتأكيد الموعد خلال 24 ساعة
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right font-cairo font-semibold flex items-center gap-2">
                    <User className="w-4 h-4" />
                    الاسم الكامل *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="أدخل اسمك الكامل" 
                      className="text-right font-cairo"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right font-cairo font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    رقم الهاتف *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="01xxxxxxxxx" 
                      className="text-right font-cairo"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Service Selection */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-right font-cairo font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  نوع الخدمة المطلوبة *
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-right font-cairo">
                      <SelectValue placeholder="اختر نوع الخدمة" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service} className="text-right font-cairo">
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date, Time, and Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right font-cairo font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    تاريخ الموعد *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="date" 
                      className="text-right font-cairo"
                      min={new Date().toISOString().split('T')[0]}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right font-cairo font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    وقت الموعد *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-right font-cairo">
                        <SelectValue placeholder="اختر الوقت" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="text-right font-cairo">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right font-cairo font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    الموقع *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-right font-cairo">
                        <SelectValue placeholder="اختر الفرع" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location} className="text-right font-cairo">
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Notes */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-right font-cairo font-semibold">
                  ملاحظات إضافية (اختياري)
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="اكتب أي ملاحظات إضافية حول حالتك أو متطلبات خاصة..."
                    className="text-right font-cairo min-h-[100px] resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="text-center pt-6">
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-white px-12 py-3 rounded-full font-cairo font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  جاري الحجز...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  تأكيد الحجز
                </div>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
