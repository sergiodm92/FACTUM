"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactInfoItem from "./ContactInfoItem";
import { contactInfo } from "@/config/site";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
const { t } = useTranslation();
if (!contactInfo.visible) return null;
  return (
    <div className="space-y-8 lg:pl-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('contact.title')}</h2>
      <div className="space-y-6">
        <ContactInfoItem
          icon={<Mail className="h-6 w-6 text-orange-600 dark:text-orange-500 mt-1" />}
          title={t('contact.email')}
          description={contactInfo.email}          
        />
        <ContactInfoItem
          icon={<Phone className="h-6 w-6 text-orange-600 dark:text-orange-500 mt-1" />}
          title={t('contact.phone')}
          description={contactInfo.phone}
        />
        <ContactInfoItem
          icon={<MapPin className="h-6 w-6 text-orange-600 dark:text-orange-500 mt-1" />}
          title={t('contact.address')}
          description={
            <>
              {contactInfo.address}
              <br />
              {contactInfo.city}, {contactInfo.country}
            </>
          }
        />
      </div>
    </div>
  );
};

export default ContactInfo;
