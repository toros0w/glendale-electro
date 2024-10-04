<template>
  <div class="accordion">
    <div class="faq-title">FAQ</div>
    <div class="faq-text-mobile">
      Browse our electrician FAQ section below to answer some common questions before contacting an
      electrician. If you have any lingering concerns, don’t hesitate to contact the professional
      electricians at Electricians of Los Angeles!
    </div>
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggleAccordion(index)">
        <h3>{{ item.title }}</h3>
        <span class="accordion-icon" :class="{ active: activeIndex === index }"> &#707; </span>
      </div>
      <div
        ref="accordionContent"
        :style="{
          maxHeight: activeIndex === index ? contentHeights[index] + 'px' : '0px'
        }"
        class="accordion-content"
      >
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqAccordion',
  data() {
    return {
      activeIndex: null, // Для отслеживания открытого элемента
      contentHeights: [], // Массив для хранения высоты каждого контента
      items: [
        {
          title: 'Do you offer free estimates?',
          content:
            "Yes, we offer free estimates for all our electrical services. Feel free to contact us, and we'll provide you with a no-obligation quote to help you understand the scope and cost of your project."
        },
        {
          title: 'Are you licensed?',
          content:
            'Yes, we are fully licensed. Our team is qualified and adheres to all local and state regulations to ensure that every job is completed safely and to the highest standards.'
        },
        {
          title: 'Are you insured?',
          content:
            'Yes, we are fully insured. This means that you’re protected in the unlikely event of any accidents or damages that might occur during our work. Your peace of mind is important to us, and our insurance ensures that you’re covered throughout the project.'
        },
        {
          title: 'Why does my circuit breaker trip all the time?',
          content:
            'A circuit breaker that trips frequently can be frustrating. Here are some common reasons why this might be happening: Overloaded Circuit: If too many devices are plugged into a single circuit, it can exceed the circuit’s capacity and cause the breaker to trip. Try redistributing the load across multiple circuits. Short Circuit: A short circuit occurs when a hot wire comes into contact with a neutral wire or a ground wire, causing a large surge of current. This is often due to damaged wiring or faulty appliances. Ground Fault: Similar to a short circuit, a ground fault happens when a hot wire comes into contact with a ground wire or a grounded part of an appliance, which can cause the breaker to trip to prevent electrical shock. Faulty Breaker: Sometimes, the breaker itself might be faulty or worn out. In this case, replacing the breaker might be necessary. Wiring Issues: Damaged or deteriorated wiring can cause intermittent issues that lead to frequent tripping. Appliance Issues: An appliance with a malfunctioning component can draw excessive current or cause a short, leading to tripping. If you’re experiencing frequent tripping, it’s a good idea to have a licensed electrician inspect your system to identify and address the underlying issue safely and effectively.'
        },
        {
          title: 'What is your warranty or service guarantee?',
          content:
            'Our warranty and service guarantee are designed to give you peace of mind and ensure that you’re completely satisfied with our work. Here’s what you can expect: We use high-quality materials and parts. Most of the parts we install come with their own manufacturer’s warranty, which we’ll ensure you have all the details for. Your satisfaction is our priority. If you’re not happy with the work performed, let us know, and we’ll work with you to resolve any concerns. Please contact us if you have any questions about our warranty or need more details about specific services or parts.'
        },
        {
          title: 'What should I do when my light go out?',
          content:
            'Providing an exact cost for an electrical job without a detailed assessment can be challenging, as several factors influence the final price. However, we offer free estimates to give you a clear idea of the cost before any work begins. Here’s how we can determine the cost for your specific job: Initial Consultation: We’ll start with a consultation to understand the scope of the project, including any specific requirements or preferences you have. Assessment: Our team will evaluate the current condition of your electrical system, the complexity of the job, and any potential challenges. Estimate: Based on this assessment, we’ll provide you with a detailed, no-obligation estimate that outlines the costs involved. Transparent Pricing: We believe in clear, upfront pricing with no hidden fees, so you know exactly what to expect. To get an accurate estimate, please contact us to schedule a free consultation. We’ll work with you to ensure you’re informed about the costs and any options available.'
        },
        {
          title: 'Can you tell me exactly how much this electrical job will cost?',
          content:
            'Providing an exact cost for an electrical job without a detailed assessment can be challenging, as several factors influence the final price. However, we offer free estimates to give you a clear idea of the cost before any work begins. Here’s how we can determine the cost for your specific job: Initial Consultation: We’ll start with a consultation to understand the scope of the project, including any specific requirements or preferences you have. Assessment: Our team will evaluate the current condition of your electrical system, the complexity of the job, and any potential challenges. Estimate: Based on this assessment, we’ll provide you with a detailed, no-obligation estimate that outlines the costs involved. Transparent Pricing: We believe in clear, upfront pricing with no hidden fees, so you know exactly what to expect. To get an accurate estimate, please contact us to schedule a free consultation. We’ll work with you to ensure you’re informed about the costs and any options available.'
        },
        {
          title: 'What electrical maintenance can I perform myself?',
          content:
            "Performing some basic electrical maintenance tasks yourself can help keep your system running smoothly. However, safety is paramount, so always ensure you follow proper procedures and consult a professional if you're unsure. Here are a few maintenance tasks you might handle: Check and Reset Circuit Breakers: If a breaker trips, you can reset it by switching it off and then back on. If it trips frequently, this could indicate a deeper issue that needs professional attention. Replace Light Bulbs: Changing light bulbs and fixtures is generally safe. Make sure to use the correct wattage and type for your fixtures to avoid overloading. Inspect Outlets and Switches: Look for any signs of wear or damage, such as discoloration, cracks, or loose connections. If you notice any problems, it’s best to consult an electrician. Clean Electrical Panels: Dust and debris can accumulate around your electrical panel. Use a dry cloth to gently wipe the exterior. Never open the panel yourself; always leave internal inspection and maintenance to a professional. Test GFCI Outlets: Press the 'Test' button on your GFCI (Ground Fault Circuit Interrupter) outlets to ensure they’re working properly. Press the 'Reset' button if necessary. If they don’t respond or trip frequently, contact an electrician. Check for Exposed Wires: Look for any exposed or frayed wires in accessible areas. If you find any, cover them with electrical tape or replace them if you're comfortable doing so. Otherwise, call a professional. Inspect for Outdated Wiring: If your home has older wiring (such as knob-and-tube or aluminum wiring), have it inspected by a professional. Upgrading outdated wiring can improve safety and performance. For anything beyond these basic tasks, or if you’re unsure about performing any of these tasks safely, it’s best to hire a licensed electrician. Your safety is the top priority."
        },
        {
          title: 'What does a fishy smell coming from my outlet mean?',
          content:
            'A fishy smell coming from an electrical outlet is a serious concern and could indicate several potential issues: Burnt Wiring or Components: The most common cause of a fishy smell is overheating wiring or electrical components that are burning. This can result from a loose connection, overloaded circuit, or damaged insulation. Electrical Arcing: Arcing occurs when electricity jumps across a gap or a damaged connection, generating heat and possibly burning the surrounding materials, which can emit a fishy odor.Melting Plastic: The fishy smell might be due to melting plastic or other materials within the outlet or behind the wall, usually caused by overheating. Faulty Outlet or Device: If the outlet itself or any device plugged into it is faulty, it can cause overheating and produce unusual odors. What to Do: Turn Off Power: Immediately turn off the power to the outlet at the circuit breaker to prevent any further damage or risk of fire. Inspect the Outlet: If you’re comfortable doing so, you can carefully remove the cover plate and inspect the outlet for signs of burning or damage. However, avoid touching any wiring or components. Contact a Professional: It’s crucial to call a licensed electrician to inspect and repair the outlet. They can safely diagnose the issue and address any underlying problems to ensure your electrical system is safe and functioning properly. Ignoring the smell or attempting to fix it yourself can lead to more severe issues, including electrical fires. Always prioritize safety and seek professional assistance when dealing with electrical problems.'
        },
        {
          title: 'Do I need an electrician?',
          content:
            'Whether or not you need an electrician depends on the specific situation and the complexity of the electrical issue. Here are some scenarios where it’s definitely a good idea to call a licensed electrician: Frequent Circuit Breaker Trips: If your circuit breaker trips often, it could indicate a serious problem with your electrical system that requires professional diagnosis and repair. Flickering or Dimming Lights: Persistent flickering or dimming of lights might signal issues with wiring, connections, or the electrical panel, which should be evaluated by an electrician. Burning Smells or Sparks: Any unusual smells, such as a fishy odor, or seeing sparks from outlets or switches are signs of potential electrical hazards that need immediate attention from a professional. Faulty Outlets or Switches: If outlets or switches are malfunctioning, especially if they feel warm to the touch or show signs of damage, an electrician can safely diagnose and fix the problem. Electrical Upgrades: For upgrading your electrical panel, adding new circuits, or installing new lighting fixtures, it’s best to have a licensed electrician handle the work to ensure it meets safety codes and standards. Outdated Wiring: Homes with outdated wiring, such as knob-and-tube or aluminum wiring, should be inspected and possibly updated by an electrician to ensure safety and compliance with current codes. Home Renovations: If you’re remodeling or adding new electrical appliances, it’s important to have a professional ensure that the new work integrates safely with your existing system. Safety Inspections: Regular inspections of your electrical system by a licensed electrician can help prevent issues and ensure everything is up to code. In general, if you’re unsure about the safety or functionality of your electrical system, or if you’re dealing with complex electrical work, it’s always a good idea to consult with a licensed electrician. We have the expertise and tools to handle electrical issues safely and effectively.'
        },
        {
          title: 'How can I lower my electric bill?',
          content:
            "Lowering your electric bill can be achieved through a combination of energy-efficient practices and upgrades. Here are some effective strategies: Upgrade to Energy-Efficient Appliances: Replace older appliances with Energy Star-rated models, which use less energy and can significantly reduce your electricity usage. Use Programmable Thermostats: Installing a programmable thermostat allows you to set heating and cooling schedules that match your routine, reducing energy consumption when you're not home. Seal Leaks and Insulate: Proper insulation and sealing gaps around doors, windows, and ducts help keep your home at a consistent temperature, reducing the need for heating and cooling. Switch to LED Lighting: LED bulbs use up to 80% less energy than incandescent bulbs and have a longer lifespan. Replace traditional bulbs with LEDs throughout your home. Unplug Devices: Many electronics and appliances draw power even when turned off. Unplug devices when not in use, or use a power strip with an on/off switch to easily cut power to multiple devices. Use Energy-Efficient Power Strips: For devices that need to stay plugged in, use energy-efficient power strips that cut off power when not in use, helping to reduce standby power consumption. Manage Your HVAC System: Regularly clean or replace air filters, ensure vents are unobstructed, and schedule annual maintenance for your HVAC system to keep it running efficiently. Adjust Water Heater Settings: Lower the temperature on your water heater to 120°F (49°C). Insulating the water heater and its pipes can also improve efficiency. Optimize Appliance Use: Run dishwashers and washing machines with full loads, and use energy-saving settings where available. Consider air-drying dishes and clothes when possible. Install Solar Panels: If feasible, investing in solar panels can reduce your reliance on the grid and lower your electricity bills over time. Use Natural Light: Maximize natural daylight by keeping blinds open during the day. Consider installing skylights or solar tubes to bring more natural light into your home. Consider Smart Home Technology: Smart plugs, thermostats, and lighting systems allow for more precise control of energy use and can help you monitor and reduce your consumption. By implementing these strategies, you can make a noticeable difference in your energy consumption and lower your electric bill. If you’re interested in more advanced solutions or need help with implementing some of these measures, a licensed electrician can provide additional guidance and assistance."
        }
      ]
    }
  },
  mounted() {
    // Рассчитываем высоту контента для каждого элемента при монтировании компонента
    this.contentHeights = this.$refs.accordionContent.map((el) => el.scrollHeight)
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    }
  }
}
</script>

<style scoped>
.faq-title {
  font-size: 40px;
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  padding-left: 15px;
  padding-bottom: 19px;
  /* border-bottom: 1px solid #ddd; */
}
.faq-text-mobile {
  display: none;
  border: none;
}
.accordion {
  border-radius: 5px;
  max-width: 600px;
  margin: 20px auto;
}

.accordion-item {
  border-bottom: 1px solid #ddd;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background-color: #f7f7f7;
  transition: background-color 0.3s ease;
}

.accordion-header:hover {
  background-color: #e7e7e7;
}

.accordion-header h3 {
  margin: 0;
  /* font-size: 1.2rem; */
  font-size: 18px;
  font-family: var(--roboto-ligt);
  font-weight: var(--weight-ligt);
}

.accordion-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
  color: var(--light-gray);
}

.accordion-icon.active {
  transform: rotate(90deg);
}

.accordion-content {
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: 0;
  background-color: #fff;
}

.accordion-content p {
  padding: 15px;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}
@media (max-width: 1220px) {
  .faq-text-mobile {
    display: block;
    width: auto;
    padding: 0 28px 0 28px;
    font-family: var(--roboto-regular);
    font-weight: var(--weight-regular);
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;
  }
  .faq-title {
    text-align: center;
  }
}
</style>