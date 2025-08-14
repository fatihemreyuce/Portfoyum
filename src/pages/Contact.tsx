import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail, Phone, MapPin, Github, Linkedin, Send,
  CheckCircle2, AlertCircle
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { type FormEvent } from "react";

const raw = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
const FORMSPREE_ENDPOINT = raw
  ? (raw.startsWith("http") ? raw : `https://formspree.io/f/${raw}`)
  : ""; // boşsa hata göstereceğiz

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [msg, setMsg] = useState("");
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status) bannerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setMsg("");

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      setMsg("Formspree ID tanımlı değil. .env’de VITE_FORMSPREE_ID ayarlayın.");
      return;
    }

    const fd = new FormData(e.currentTarget);

    // Honeypot (botlar doldurursa iptal)
    if ((fd.get("company") as string)?.trim()) return;

    const name = (fd.get("name") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();
    const message = (fd.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setMsg("Lütfen tüm alanları doldurun.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMsg("Mesajın gönderildi! En kısa sürede dönüş yapacağım.");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setMsg(data?.errors?.[0]?.message || "Bir şey ters gitti. Lütfen tekrar deneyin.");
      }
    } catch {
      setStatus("error");
      setMsg("Ağ hatası. İnternet bağlantını kontrol et.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <div className="py-10 space-y-8">
        {/* Başlık */}
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">İletişim</h1>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Projeleriniz, iş teklifleri veya iş birliği fırsatları için bana ulaşabilirsiniz.
            Formu doldurun ya da aşağıdaki bilgilerden direkt iletişime geçin.
          </p>
        </header>

        {/* Banner */}
        {status && (
          <div
            ref={bannerRef}
            className={`rounded-xl border p-4 text-sm ${
              status === "success" ? "border-emerald-300 bg-emerald-50" : "border-red-300 bg-red-50"
            }`}
          >
            <div className="flex items-center gap-2">
              {status === "success"
                ? <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                : <AlertCircle className="h-4 w-4 text-red-600" />
              }
              <span>{msg}</span>
            </div>
          </div>
        )}

        {/* İçerik */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* FORM */}
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Mesaj Gönder</CardTitle></CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={onSubmit}>
                {/* Honeypot */}
                <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />
                <Input name="name" placeholder="Adınız" required />
                <Input name="email" type="email" placeholder="E-posta" required />
                <Textarea name="message" rows={5} placeholder="Mesajınız..." required />
                <Button type="submit" className="w-full" disabled={loading}>
                  <Send className="mr-2 h-4 w-4" />
                  {loading ? "Gönderiliyor..." : "Gönder"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* BILGILER */}
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>İletişim Bilgileri</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <ContactInfo icon={<Mail className="h-4 w-4" />} title="E-posta" text="fatihemreyuce@example.com" />
              <ContactInfo icon={<Phone className="h-4 w-4" />} title="Telefon" text="+90 555 555 55 55" />
              <ContactInfo icon={<MapPin className="h-4 w-4" />} title="Konum" text="Gebze / Kocaeli" />
              <Separator />
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <a href="https://github.com/youruser" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.linkedin.com/in/youruser" target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* HARİTA (istersen bırak) */}
        <div className="overflow-hidden rounded-2xl border">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193607.79270599892!2d29.35544525!3d40.79523645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadf30c0b0fdb3%3A0x64ecf6f82f629255!2sGebze%2C%20Kocaeli!5e0!3m2!1str!2str!4v1691500000000!5m2!1str!2str"
            width="100%" height="300" style={{ border: 0 }} loading="lazy"
          />
        </div>
      </div>
    </Container>
  );
}

function ContactInfo({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-lg border bg-background">{icon}</span>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}
