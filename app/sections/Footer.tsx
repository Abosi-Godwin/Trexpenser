import { FaFacebookF, FaXTwitter, FaInstagram, FaEnvelope } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

function Footer() {
  const handleEmailSub = () => {
    //e.preventDefault();
  };
  
  return (
    <div className="bg-light-primaryCTA py-10 px-5 text-white">
      <div className="font-bold">
        <h1 className="text-2xl">Trexpenser: Smart Savings for a Brighter Future.</h1>
        <p className="py-4 text-white/80">
          Manage your expenses, set savings goals, and track your financial progress with ease.
        </p>
      </div>
      <div className="py-5">
        <div>
          <h1 className="font-bold text-xl mb-3">Join Our Newsletter</h1>
          <form className="grid grid-col-1 gap-2 md:grid-cols-quarter">
            <input
              type="email"
              required
              placeholder="Enter your email here..."
              className="p-3 rounded-md outline-0"
            />
            <input
              type="submit"
              className="bg-light-iconColor text-white font-extrabold
                            rounded-md p-2 uppercase "
            />
          </form>
        </div>
        <div className="py-5 flex items-start gap-4">
          <input type="checkbox" />
          <p className="text-white/80">
            Also send me motivations, tips and tricks on how to save and manage my budgets.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row md:justify-between
            md:items-center"
      >
        <div className="py-5">
          <h1 className="text-2xl text-color-3 font-bold">Quick Links</h1>
          <ul className="divide-y divide-color-6 py-2 font-bold text-white/80">
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
          <h2 className="text-2xl font-bold">Follow us</h2>
          <ul
            className="flex justify-between
                py-4 gap-4 md:flex-col"
          >
            <li
              className="p-2 bg- text-xl inline rounded
                    text-white/90 w-fit"
            >
              <FaFacebookF />
            </li>
            <li
              className="p-2 bg-color-4 text-xl inline-block rounded
                     text-white/90 w-fit"
            >
              <FaXTwitter />
            </li>
            <li
              className="p-2 bg-color-4 text-xl inline-block rounded
                     text-white/90 w-fit"
            >
              <FaInstagram />
            </li>
            <li
              className="p-2 bg-color-4 text-xl inline-block rounded
                     text-white/90 w-fit"
            >
              <FaEnvelope />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center pt-5 text-white/80">
        <p> &copy; {currentYear} Trexpenser. All rights reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
