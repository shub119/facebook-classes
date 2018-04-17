//this is a typscript file 

class facebook_profile_about{

     firstName: string;
     lastName: string;

     constructor(firstName: string, lastName:string){
         this.firstName=firstName;
         this.lastName=lastName;

     }
     userName=()=>{
        return this.firstName+" "+this.lastName
     }
    }
    class overview extends facebook_profile_about{
        workplace: string;
        designation:string;
        currentCity :string;
        hometown:string;
        mobile:number;
        dateOfBirth:any;
    
        constructor(firstName:string,lastName:string,workplace:string,designation:string, currentCity: string,hometown:string,mobile:number,dateOfBirth:Date){
        super(firstName,lastName)
    
        this.workplace=workplace
        this.designation=designation
        this.currentCity=currentCity
        this.hometown=hometown
        this.mobile=mobile
        this.dateOfBirth=dateOfBirth
    }

    getAge=()=>{
    
            var timeDiff = Math.abs(Date.now() - this.dateOfBirth);
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            let age  = Math.floor((timeDiff / (1000 * 3600 * 24))/365); 
            return age 
    }
    getWorkingplace=()=>{
        return this.workplace
    }
    getDesignation=()=>{
        return this.designation
    }
    setNewDesignation=(designation:string)=>{
        return this.designation=designation
    }
    getCurrentlocation=()=>{
        return this.currentCity
    }
    getHometown=()=>{
        return this.hometown
    }
    getMobileNo=()=>{
        return this.mobile
    }   
    setNewMobileNo=(mobile: number)=>{
        return this.mobile=mobile
    }
        
    }
   
 class work_education extends facebook_profile_about{
      workplace: string;
      designation:string;
      professinolSkill:string;
      collage:string;
      school:string;

      constructor(firstName:string,lastName:string,workplace:string,designation:string, professinolSkill: string,collage:string,school:string){
      super(firstName,lastName)

      this.workplace=workplace
      this.designation=designation
      this.professinolSkill=professinolSkill
      this.collage=collage
      this.school=school
 }
   getProfessinolskill=()=>{
      return this.professinolSkill
   }
   getCollageDetail=()=>{
    return this.collage
   }
   getschoolDetail=()=>{
    return this.school
   }

 }

 class contact_and_basic_info extends facebook_profile_about{
    mobilePhone: number;
    email:string[]=[];
    websites:string;
    Skype:string;

    constructor(firstName:string,lastName:string,mobilePhone:number,email:string[]=[], websites: string,skype:string){
    super(firstName,lastName)

    this.mobilePhone=mobilePhone
    this.email=email
    this.websites=websites
    this.Skype=skype
}
addnewEmail =(...emailId:string[])=>{

    let newEmail=emailId;
    this.email=this.email.concat(newEmail);
   return this.email

   }
   getwebaddress=()=>{
    console.log(this.websites) 
   }
   getskypecontact=()=>{
    console.log(this.Skype) 
   }

}
class detailsAboutYou extends facebook_profile_about{
    aboutYou: string;
    otherNames:string;
    FavouriteQuotes:string;
    bloodGroup:string;
    

    constructor(firstName:string,lastName:string,aboutYou:string,otherNames:string, FavouriteQuotes: string,bloodGroup:string){
    super(firstName,lastName)

    this.aboutYou=aboutYou
    this.otherNames=otherNames
    this.FavouriteQuotes=FavouriteQuotes
    this.bloodGroup=bloodGroup

   }  
     displayQuote=()=>{
    return this.FavouriteQuotes
   }
    replaceQuote=(FavouriteQuotes: string)=>{
    return this.FavouriteQuotes=FavouriteQuotes 
   }
    getDetailaboutYou=()=>{
    console.log(this.aboutYou) 
   }
   getBloodgroupDetail=()=>{
    console.log(this.bloodGroup) 
   }

}

//display user name
 let User = new facebook_profile_about("Shubham","Rajput")
 console.log(User.userName())
 
 let d = new Date("1994-04-18T18:03:40.887"); //storing date of birth
 let overviewdetail = new overview("Shubham","Rajput","Tata consultancy services- Pune","Assitent sustem engineer","Pune","itarsi",8871452098,d)

    //display user age from birthday
     console.log(overviewdetail.getAge())

    //disply working location
    console.log(overviewdetail.getWorkingplace())

    //get and set other user info
    console.log(overviewdetail.getDesignation())
    console.log(overviewdetail.setNewDesignation("System engineer"))
    console.log(overviewdetail.getCurrentlocation())
    console.log(overviewdetail.getHometown()) 
    console.log(overviewdetail.getMobileNo())
    console.log(overviewdetail.setNewMobileNo(8944793600))

let details_Work_eduction= new work_education("Shubham","Rajput","Tata consultancy services- Pune","Assitent sustem engineer","product support executive","oriental inst. of science and technolgy, bhopal","kendriya vidyalaya no 02 cpe itarsi") 
     
     //get eduction details
     console.log(details_Work_eduction.getProfessinolskill())
     console.log(details_Work_eduction.getCollageDetail())
     console.log(details_Work_eduction.getschoolDetail())

let details_contact_andbasic_info= new contact_and_basic_info("Shubham","Rajput",8871452098,["shubham.kumar0264@yahoo.com"],"https://shub119.github.io/","shubham.rajput25")
     //details from class contacts and info
     console.log(details_contact_andbasic_info.addnewEmail("shubham.rajput02@gmail.com"))
     console.log(details_contact_andbasic_info.addnewEmail("shubham.kumar@barclayscorp.com"))
     details_contact_andbasic_info.getwebaddress()
     details_contact_andbasic_info.getskypecontact()

let details_aboutYou= new detailsAboutYou("Shubham","Rajput","cool and charm boy","raju","God judges us by our thoughts and deeds, not by what others say about us........!!!!!!", "B+")
     
     //calling methods
     console.log(details_aboutYou.displayQuote())
     console.log(details_aboutYou.replaceQuote("I dont know what to say here...!!! :) "))
     details_aboutYou.getDetailaboutYou()
     details_aboutYou.getBloodgroupDetail()



/// end of the program






















