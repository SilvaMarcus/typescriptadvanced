
enum UserStatus  {
     Admin = 1,
     User = 2,
};


const checkstatus = (status: number) => {
  
     switch(status) {

          case UserStatus.Admin: 
               console.log('È Admin') 
               break;

          case UserStatus.User: 
               console.log('È User') 
               break;
    
     }    

     
}  

checkstatus(3)