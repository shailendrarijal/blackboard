import { useState, useEffect } from "react"

export default function NaatiVocabulary() {
  const vocab = {
    business: [
      {
        id: 1,
        englishWord: "business",
        nepaliWord: "व्यापार"
      },
      {
        id: 2,
        englishWord: "advertising campaign",
        nepaliWord: "बिज्ञापन अभियान"
      },
      {
        id: 3,
        englishWord: "branch office",
        nepaliWord: "शाखा कार्यालय"
      }],
    education: [
      {
        id: 1,
        englishWord: "education",
        nepaliWord: "शिक्षा"
      },
      {
        id: 2,
        englishWord: "assessment",
        nepaliWord: "मूल्यांकन"
      },
      {
        id: 3,
        englishWord: "adult migrant education program",
        nepaliWord: "बयस्क प्रबासी शिक्षा कार्यक्रम"
      }],
    legal: [
      {
        id: 1,
        englishWord: "legal",
        nepaliWord: "कानूनी"
      },
      {
        id: 2,
        englishWord: "accused",
        nepaliWord: "आरोपी"
      },
      {
        id: 3,
        englishWord: "access",
        nepaliWord: "पौंच"
      }],
    health: [
      {
        id: 1,
        englishWord: "health",
        nepaliWord: "स्वास्थ्य"
      },
      {
        id: 2,
        englishWord: "agents",
        nepaliWord: "तत्व"
      },
      {
        id: 3,
        englishWord: "adult",
        nepaliWord: "बयस्क"
      }],
    finance: [
      {
        id: 1,
        englishWord: "finance",
        nepaliWord: "वित्त"
      },
      {
        id: 2,
        englishWord: "bank statement",
        nepaliWord: "बैंक विवरण"
      },
      {
        id: 3,
        englishWord: "average",
        nepaliWord: "औसत"
      }],
    immigration: [
      {
        id: 1,
        englishWord: "immigration",
        nepaliWord: "अध्यागमन"
      },
      {
        id: 2,
        englishWord: "business migration",
        nepaliWord: "व्यापारिक आप्रवासन"
      },
      {
        id: 3,
        englishWord: "accomodation",
        nepaliWord: "बस्ने ठाउँ"
      }],
    socialServices: [
      {
        id: 1,
        englishWord: "social services",
        nepaliWord: "सामाजिक सेवाहरु"
      },
      {
        id: 2,
        englishWord: "attached",
        nepaliWord: "संलग्न"
      },
      {
        id: 3,
        englishWord: "appointment",
        nepaliWord: "भेट्ने समय"
      }],
    consumerAffairs: [
      {
        id: 1,
        englishWord: "consumer affairs",
        nepaliWord: "उपभोक्ता मामिला"
      },
      {
        id: 2,
        englishWord: "consumer",
        nepaliWord: "उपभोक्ता"
      },
      {
        id: 3,
        englishWord: "affairs",
        nepaliWord: "मामिलाहरू"
      }],
    housing: [
      {
        id: 1,
        englishWord: "housing",
        nepaliWord: "आवास"
      },
      {
        id: 2,
        englishWord: "bedroom",
        nepaliWord: "सुत्नेकोठा"
      },
      {
        id: 3,
        englishWord: "bathroom",
        nepaliWord: "स्नान्कक्ष"
      }],
    employment: [
      {
        id: 1,
        englishWord: "employment",
        nepaliWord: "रोजगार"
      },
      {
        id: 2,
        englishWord: "amount",
        nepaliWord: "रकम"
      },
      {
        id: 3,
        englishWord: "administrator",
        nepaliWord: "प्रशासक"
      }],
    community: [
      {
        id: 1,
        englishWord: "community",
        nepaliWord: "समुदाय"
      },
      {
        id: 2,
        englishWord: "chores",
        nepaliWord: "घराएसी कामहरु"
      },
      {
        id: 3,
        englishWord: "alcohol",
        nepaliWord: "मादक पदार्थ"
      }],
    other: [
      {
        id: 1,
        englishWord: "other",
        nepaliWord: "अन्य"
      },
      {
        id: 2,
        englishWord: "actually",
        nepaliWord: "बास्तवमा"
      },
      {
        id: 3,
        englishWord: "accordingly",
        nepaliWord: "सोहि अनुसार"
      }]
  };
    const [englishWord, setEnglishWord] = useState("English Word");
    const [nepaliWord, setNepaliWord] = useState("नेपाली शब्द");
    const [counter, setCounter] = useState(0);
    const [displayButtons, setDisplayButtons] = useState(false);
    let wordsArr = [];
    const [wordsArray, setWordsArray] = useState([]);
    const [category, setCategory] = useState("");

    function showWord(props){
      setCategory(props);
      switch (props) {
      case "health":
        wordsArr = vocab.health;
        break;
      case "business":
        wordsArr = vocab.business;
        break;
      case "education":
        wordsArr = vocab.education;
        break;
      case "employment":
        wordsArr = vocab.employment;
        break;
      case "housing":
        wordsArr = vocab.housing;
        break;
      case "legal":
        wordsArr = vocab.legal;
        break;
      case "finance":
        wordsArr = vocab.finance;
        break;
      case "immigration":
        wordsArr = vocab.immigration;
        break;
      case "community":
        wordsArr = vocab.community;
        break;
      case "socialServices":
        wordsArr = vocab.socialServices;
        break;
      case "consumerAffairs":
        wordsArr = vocab.consumerAffairs;
        break;
      case "other":
        wordsArr = vocab.other;
        break;   
      default: null;
      }

      setWordsArray(wordsArr);
      setEnglishWord(wordsArr[0].englishWord);
      setNepaliWord(wordsArr[0].nepaliWord);
      setDisplayButtons(true);
      setCounter(0);
    }
   
      useEffect(() => {
        if(counter < wordsArray.length) {
          wordsArray.map(checkID);
  
          function checkID(){
            
              setEnglishWord(wordsArray[counter].englishWord);
              setNepaliWord(wordsArray[counter].nepaliWord);
              }
  
            } 
            console.log(counter);
      });
    

    return (
      <div>
        <div>
          <div className="container-fluid">
                <div className="categoryContainer my-3 text-center row">
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("health")}>Health</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("education")}>Education</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("finance")}>Finance</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("business")}>Business</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("legal")}>Legal</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("employment")}>Employment</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("housing")}>Housing</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("immigration")}>Immigration</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("community")}>Community</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("socialServices")}>Social Services</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("consumerAffairs")}>Consumer Affairs</button>
                    <button className="button category btn-outline-info btn-md" onClick={() => showWord("other")}>Other</button>
                </div>
          </div>
          <span>Category: <strong className="capitalize">{category}</strong></span>
          <div className="card displayCard">

            <h5 className="card-header my-2 capitalize">{englishWord}</h5>
            <h5 className="card-footer my-2 capitalize">{nepaliWord}</h5>
          </div>
          
          {displayButtons? 
            <div className="row">
              {counter<=0? <button className="btn-light button-md mx-auto buttonNav" disabled>Previous</button>:<button className=" btn-primary button-md mx-auto buttonNav" onClick={() => setCounter(counter-1)}>Previous</button>}
              
              {counter<wordsArray.length-1? <button className="btn-primary button-md mx-auto buttonNav" onClick={() => setCounter(counter+1)}>Next</button>: <button className=" btn-light button-md mx-auto buttonNav" disabled>Next</button>  }
              

          </div>:<p className="text-center">Select a category to get words!</p>
          }
          
        </div>
  
        <style jsx>{`
            .card{
                margin: 3rem 0;
            }
            .category{
                margin:0.5rem;
                border-radius: 10px;
                border-color: #003893;
            }
           
            .displayCard{
                width: 60%;
                margin: 1rem auto;
                text-align: center;
                border:none;
            }
            .buttonNav{
              width: 5rem;
            }
            .button{
              width: 10rem;
              margin: auto;
            }
            .capitalize{
              color: teal;
              text-transform:capitalize;
            }
          
        `}</style>
  
      </div>
    )
  }