"use client";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaAndroid, FaApple, FaFigma, 
  FaFacebook, FaSearch, FaChartLine, FaCrown, FaGem, FaStar 
} from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

const PricingPage = () => {
  const categories = [
    {
      title: "App Development",
      banner: "/app.png",
      plans: [
        { icon: <FaAndroid className="text-2xl md:text-3xl text-green-500" />, name: "Basic", price: "$499", features: ["Android App", "Basic UI", "1 Month Support"], badge: null },
        { icon: <FaApple className="text-2xl md:text-3xl text-gray-500" />, name: "Standard", price: "$899", features: ["Android + iOS", "Better UI/UX", "3 Months Support", "App Store Submission"], badge: <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-0.5 text-[10px] md:text-xs font-bold transform translate-x-2 -translate-y-2 rotate-12">RECOMMENDED</div> },
        { icon: <FaFigma className="text-2xl md:text-3xl text-purple-500" />, name: "VIP", price: "$1499", features: ["Full Custom App", "Advanced UI/UX", "6 Months Support", "Premium Maintenance", "Dedicated Manager"], badge: <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-cyan-500 text-black px-2 py-0.5 text-[10px] md:text-xs font-bold transform translate-x-2 -translate-y-2 rotate-12 flex items-center gap-1"><IoDiamond /> ELITE</div> },
      ],
    },
    {
      title: "Web Development",
      banner: "/web.png",
      plans: [
        { icon: <FaHtml5 className="text-2xl md:text-3xl text-blue-500" />, name: "Basic", price: "$299", features: ["5 Pages Website", "Responsive Design", "1 Month Support"], badge: null },
        { icon: <FaCss3Alt className="text-2xl md:text-3xl text-blue-600" />, name: "Standard", price: "$599", features: ["10 Pages Website", "SEO Optimized", "3 Months Support", "Basic Analytics"], badge: <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-0.5 text-[10px] md:text-xs font-bold transform translate-x-2 -translate-y-2 rotate-12">POPULAR</div> },
        { icon: <FaReact className="text-2xl md:text-3xl text-cyan-500" />, name: "VIP", price: "$999", features: ["Unlimited Pages", "Custom Design", "6 Months Support", "Premium Hosting", "Priority Support"], badge: <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-cyan-500 text-black px-2 py-0.5 text-[10px] md:text-xs font-bold transform translate-x-2 -translate-y-2 rotate-12 flex items-center gap-1"><FaCrown /> EXCLUSIVE</div> },
      ],
    },
    {
      title: "Digital Marketing",
      banner: "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA=",
      plans: [
        { icon: <FaFacebook className="text-2xl md:text-3xl text-blue-600" />, name: "Basic", price: "$199", features: ["Social Media Setup", "1 Campaign", "Reports"], badge: null },
        { icon: <FaSearch className="text-2xl md:text-3xl text-yellow-500" />, name: "Standard", price: "$399", features: ["SEO + Social Media", "3 Campaigns", "Monthly Reports", "Content Strategy"], badge: <div className="absolute top-0 right-0 bg-cyan-500 text-black px-2 py-0.5 text-[10px] md:text-xs font-bold transform translate-x-2 -translate-y-2 rotate-12">BEST VALUE</div> },
        { icon: <FaChartLine className="text-2xl md:text-3xl text-pink-500" />, name: "VIP", price: "$799", features: ["Full Marketing", "Unlimited Campaigns", "Weekly Reports", "Dedicated Team", "24/7 Support"], badge: <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-cyan-500 text-black px-2 py-0.5 text-[10px] md:text-xs font-bold transform translate-x-2 -translate-y-2 rotate-12 flex items-center gap-1"><FaGem /> PREMIUM</div> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* VIP Banner */}
      <div className="w-full  h-[300px] md:h-[550px] relative mb-8 md:mb-12 overflow-hidden">
        <div
          className="absolute bg-fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/price.png')"
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-0" /> 
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] text-center"
          >
            Exclusive <span className="text-blue-500">VIP</span> Plans
          </motion.h1>
          <p className="text-gray-200 mt-3 text-sm md:text-base text-center max-w-2xl">
            Choose a plan that blends premium features with style. Built for performance and impact.
          </p>
        </div>
       
      </div>
<div className="flex justify-center items-center pb-13 pt-3">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-black tracking-tight text-2xl sm:text-3xl md:text-5xl  drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] text-centerfont-bold text-center"
  >
    Choose the <span className="text-blue-500">Plan That Fits </span> You Best
  </motion.h2>
</div>
      {/* Categories */}
      <div className="px-4 md:px-6 max-w-7xl mx-auto space-y-12 md:space-y-16 mb-20 md:mb-36">
        {categories.map((category, idx) => (
          <div key={idx}>
            {/* Category Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative w-full h-[140px] md:h-[200px] mb-5 md:mb-8 rounded-lg md:rounded-xl overflow-hidden border border-gray-200 shadow-md md:shadow-lg shadow-black/30"
            >
              <img src={category.banner} alt={category.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 md:p-6">
                <h2 className="text-lg md:text-2xl font-bold text-white">{category.title}</h2>
              </div>
            </motion.div>

            {/* Plans */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {category.plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className={`relative rounded-lg md:rounded-xl overflow-hidden border shadow-md md:shadow-lg shadow-black/20 transition-all duration-300 ${plan.name === "VIP" ? "border-blue-400" : "border-gray-200"}`}
                >
                  {plan.badge}
                  <div className={`p-4 md:p-6 h-full ${plan.name === "VIP" ? "bg-gradient-to-b from-blue-50 to-white" : "bg-white"}`}>
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className={`p-1.5 md:p-2 rounded-full ${plan.name === "VIP" ? "bg-blue-100" : "bg-gray-100"}`}>
                        {plan.icon}
                      </div>
                      <h3 className={`text-lg md:text-xl font-bold ${plan.name === "VIP" ? "text-blue-600" : "text-gray-800"}`}>
                        {plan.name}
                      </h3>
                    </div>
                    <p className={`text-2xl md:text-3xl font-bold mb-3 md:mb-4 ${plan.name === "VIP" ? "text-blue-600" : "text-gray-900"}`}>
                      {plan.price}
                    </p>
                    <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4 text-gray-600 text-xs md:text-sm">
                      {plan.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-1 md:gap-2">
                          <span>{plan.name === "VIP" ? <FaStar className="text-[10px] md:text-xs text-blue-500" /> : "✓"}</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-1.5 md:py-2 px-3 md:px-4 rounded-md font-bold transition-all text-xs md:text-sm ${plan.name === "VIP" 
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-300" 
                      : "bg-gray-800 hover:bg-gray-700 text-white"}`}>
                      {plan.name === "VIP" ? "Get VIP Treatment" : "Get Started"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
