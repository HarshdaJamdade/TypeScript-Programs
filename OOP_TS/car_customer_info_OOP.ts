//Display customer information of car owner

class Information
{
    Customer_Number : number = 1

    Car_Owner_info()
    {
        var Car_Owner_Name : string = "Anuj Mahatre"
        var Licence_No : string = "DL14<space>20110012345"
        console.log("customer Number : " +this.Customer_Number)
        console.log("Car Owner Name : " +Car_Owner_Name)
        console.log("Licence No : " +Licence_No)
    }

    car_Info()
    {
       var Car_Number : any = "MH120584"
       var Car_color : string = "Red"
        
       console.log("customer Number : " +this.Customer_Number)
       console.log("Car Number : "+Car_Number);
       console.log("Car Color : "+Car_color);
    
    }
}

var cobj = new Information();

cobj.Car_Owner_info()
cobj.car_Info()
