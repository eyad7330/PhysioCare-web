import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare, User, Phone, Mail, Send, MapPin, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون أكثر من حرفين"),
  phone: z.string().min(11, "رقم الهاتف غير صحيح"),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional().or(z.literal("")),
  subject: z.string().min(3, "الموضوع يجب أن يكون أكثر من 3 أحرف"),
  message: z.string().min(10, "الرسالة يجب أن تكون أكثر من 10 أحرف"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "تم إرسال رسالتك بنجاح! ✅",
        description: "سيتم الرد عليك خلال 24 ساعة",
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

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      info: "19999",
      description: "متاح 24/7"
    },
    {
      icon: MapPin,
      title: "زورنا",
      info: "5 فروع في القاهرة الكبرى",
      description: "جميع المواقع"
    },
    {
      icon: Clock,
      title: "مواعيد العمل",
      info: "السبت - الخميس",
      description: "9 ص - 9 م"
    },
    {
      icon: Headphones,
      title: "دعم العملاء",
      info: "support@physiocare.com",
      description: "خدمة مميزة"
    }
  ];

  return (
    <div className="animate-fade-in-up" dir="rtl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4 font-cairo flex items-center justify-center gap-3">
          <MessageSquare className="w-8 h-8" />
          تواصل معنا
        </h2>
        <p className="text-muted-foreground font-cairo">
          نحن هنا لمساعدتك في أي استفسار أو طلب معلومات
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-cairo font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{item.info}</p>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
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

          {/* Email and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right font-cairo font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    البريد الإلكتروني (اختياري)
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="example@email.com" 
                      type="email"
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
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right font-cairo font-semibold">
                    موضوع الرسالة *
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="استفسار عن الخدمات" 
                      className="text-right font-cairo"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-right font-cairo font-semibold">
                  الرسالة *
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="اكتب رسالتك هنا..."
                    className="text-right font-cairo min-h-[120px] resize-none"
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
              className="bg-secondary hover:bg-secondary/90 text-white px-12 py-3 rounded-full font-cairo font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  جاري الإرسال...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </div>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
