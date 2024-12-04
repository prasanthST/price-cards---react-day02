import Cards from './Cards'

const App = () => {
  const cards = [{
    tag: "FREE",
    tittle: "$0/month",
    features: [
      { isIncluded: true, text: "Single User" },
      { isIncluded: true, text: "50GB Storage" },
      { isIncluded: true, text: "Unlimited Public Projects" },
      { isIncluded: true, text: "Community Access" },
      { isIncluded: false, text: "Unlimited Private Projects" },
      { isIncluded: false, text: "Dedicated Phone Support" },
      { isIncluded: false, text: "Free Subdomain" },
      { isIncluded: false, text: "Monthly Status Reports"}
    ]
  },
  
  {
    tag: "PLUS",
    tittle: "$9/month",
    features: [
      { isIncluded: true, text: "5 Users" },
      { isIncluded: true, text: "50GB Storage" },
      { isIncluded: true, text: "Unlimited Public Projects" },
      { isIncluded: true, text: "Community Access" },
      { isIncluded: true, text: "Unlimited Private Projects" },
      { isIncluded: true, text: "Dedicated Phone Support" },
      { isIncluded: true, text: "Free Subdomain" },
      { isIncluded: false, text: "Monthly Status Reports" }
    ]
  },
  
  {    
    tag: "PRO",
    tittle: "$49/month",
    features: [
      { isIncluded: true, text: "Unlimited User" },
      { isIncluded: true, text: "50GB Storage" },
      { isIncluded: true, text: "Unlimited Public Projects"},
      { isIncluded: true, text: "Community Access" },
      { isIncluded: true, text: "Unlimited Private Projects" },
      { isIncluded: true, text: "Dedicated Phone Support" },
      { isIncluded: true, text: "Free Subdomain" },
      { isIncluded: true, text: "Monthly Status Reports" }
    ],
  }];

  return (
    <>
      {
        cards.map((card, index) =>  <Cards card={card} key={index} /> )
      }
    </>
  )
}

export default App