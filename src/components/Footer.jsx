import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const currentYear = new Date().getFullYear();
function Footer() {
    return (
        <div className="bg-color-9 py-5 px-2">
            <div className="text-color-2 font-bold">
                <h1 className="text-color-3 text-2xl">
                    Trexpenser: Smart Savings for a Brighter Future.
                </h1>
                <p className="text-color-5 py-2">
                    Manage your expenses, set savings goals, and track your
                    financial progress with ease.
                </p>
            </div>
            <div className="py-4">
                <h1 className="text-2xl text-color-3 font-bold">Quick Links</h1>
                <ul
                    className="divide-y divide-color-6 py-2 text-color-4
                font-bold"
                >
                    <li className="pt-2">Home</li>
                    <li className="pt-2">Savings goal</li>
                    <li className="pt-2">Budget planning</li>
                    <li className="pt-2">FAQ</li>
                    <li className="pt-2">Help center</li>
                    <li className="pt-2">Terms of service</li>
                    <li className="pt-2">Privacy policy</li>
                </ul>
            </div>
            <div>
                <h2 className="text-2xl text-color-3 font-bold">Follow us</h2>
                <ul
                    className="text-color-white flex justify-between
                py-4 gap-4"
                >
                    <li
                        className="p-2 bg-color-4 text-xl inline rounded
                    text-color-8 w-fit"
                    >
                        <FaFacebookF />
                    </li>
                    <li
                        className="p-2 bg-color-4 text-xl inline-block rounded
                    text-color-8 w-fit"
                    >
                        <FaXTwitter />
                    </li>
                    <li
                        className="p-2 bg-color-4 text-xl inline-block rounded
                    text-color-8 w-fit"
                    >
                        <FaInstagram />
                    </li>
                    <li
                        className="p-2 bg-color-4 text-xl inline-block rounded
                    text-color-8 w-fit"
                    >
                        <FaEnvelope />
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center pt-5 text-color-3">
                <p> &copy; {currentYear} Trexpenser. All rights reserved.</p>
            </div>
        </div>
    );
}
export default Footer;
