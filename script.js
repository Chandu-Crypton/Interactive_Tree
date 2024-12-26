
const recommendations = {
    Beach: {
      Adventure: {
        Low: "Explore the beaches of Goa, India, on a budget. Enjoy the vibrant culture and thrilling water sports!",
        Medium: "Visit Bali, Indonesia, for water sports and cultural exploration. A great mix of adventure and relaxation.",
        High: "Experience luxury in the Maldives with private villas, water activities, and exclusive adventure packages."
      },
      Relaxation: {
        Low: "Relax on the budget-friendly beaches of Phuket, Thailand, with scenic views and affordable stays.",
        Medium: "Unwind in the Caribbean islands, with beautiful beaches and mid-range resorts.",
        High: "Pamper yourself in Bora Bora with high-end resorts, private beaches, and exquisite dining."
      }
    },
    Mountains: {
      Adventure: {
        Low: "Go trekking in Nepal, exploring the breathtaking Himalayan trails on a budget.",
        Medium: "Experience adventure in Banff, Canada, with hiking, climbing, and stunning landscapes.",
        High: "Embark on a luxury mountain safari in the Swiss Alps with premium accommodations and activities."
      },
      Relaxation: {
        Low: "Relax in the peaceful hill stations of India, like Manali or Darjeeling, with budget-friendly stays.",
        Medium: "Visit the Blue Ridge Mountains in the USA for cozy cabins and moderate expenses.",
        High: "Enjoy the serene beauty of the Dolomites in Italy with world-class spas and luxury lodges."
      }
    }
  };
  
  document.getElementById("generate").addEventListener("click", () => {
    const preference = document.getElementById("preference").value;
    const activity = document.getElementById("activity").value;
    const budget = document.getElementById("budget").value;
  
    const resultDiv = document.getElementById("result");
  
    if (preference && activity && budget) {
      
      const recommendation = recommendations[preference][activity][budget];
      resultDiv.textContent = recommendation;
      resultDiv.classList.add("visible");
    } else {
     
      resultDiv.textContent = "Please select all options to get a recommendation.";
      resultDiv.classList.add("visible");
    }
  });
  