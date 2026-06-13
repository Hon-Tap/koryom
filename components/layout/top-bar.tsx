import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import Container from "../ui/container";

export default function TopBar() {
  return (
    <div className="bg-[#16225f] text-white border-b border-white/10">
      <Container>
        <div className="flex h-11 items-center justify-between text-sm">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+211927815160"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+211 927 815 160</span>
            </a>

            <a
              href="mailto:koryominsurance65@gmail.com"
              className="hidden md:flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>koryominsurance65@gmail.com</span>
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Juba, South Sudan</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}