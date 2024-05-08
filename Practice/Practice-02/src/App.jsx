
import Container from './components/Container';
import Universities from './components/Universities';
function App() {
 
  let universities = "famous Universities in Sindh";

  const versities = [
    "LUMHS - Liaquat University of Medical & Health Science",
    "MUET - Mehran University of Engineering and Technology",
    "University of Sindh",
    "IBA - Institute of Business Administration, Karachi",
    "NEDUET - NED University of Engineering and Technology",
    "KU - University of Karachi",
    "SZABIST - Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology",
    "SSUET - Sir Syed University of Engineering and Technology",
    "Iqra University",
    "Dow University of Health Sciences",
    "IBA Sukkur - Institute of Business Administration, Sukkur",
    "SSMU - Shah Abdul Latif University",
    "LUAWMS - Lasbela University of Agriculture, Water and Marine Sciences",
    "SALU - Shah Abdul Latif University, Khairpur",
    "QUEST - Quaid-e-Awam University of Engineering, Science and Technology",
    "Gambat Medical College",
    "Khairpur Medical College",
    "Begum Nusrat Bhutto Women University",
    "Sindh Agriculture University",
    "Mehran University College of Engineering & Technology",
    "Liaquat University of Medical & Health Sciences, Jamshoro",
    "Peoples University of Medical & Health Sciences for Women, Nawabshah",
    "Shaheed Mohtarma Benazir Bhutto Medical University, Larkana"
  ];
    
  return (
   <>
      <Container>
      <h2 style={{textAlign:"center", fontSize:"50px", color:"#ffc107", textShadow:"1px 1px 2px black", marginBottom:"10px"}}>These are {universities} </h2>
    
      <Universities versity={versities}/>
      </Container>
   </>  
  )
}

export default App
