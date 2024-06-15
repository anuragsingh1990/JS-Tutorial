//Object Singlton


//object Declaretion 

const obj=new Object()  //this is a singleton object

const obj1={}  // this is a literal object


obj1.name="Anurag Singh"
obj1.email="anurag@gmail.com"
obj1.dob="15/12/1992"
obj1.gender="M"
obj1.mySym=Symbol("myKey")
obj1.clam={staus:"Paid",type:"Third Party",start_date:"15/05/2024",end_date:"14/05/2025"}

console.log(obj1.clam.type)


const marvel_hero={nameMarval:"IronMan",partMarval:"4",villan:"Ultran"}
const dc_hero={name:"Superman",part:"1",movie:"Man of Steel"}

//Methods of merging elements of two objects 
const mainObj=Object.assign({},marvel_hero,dc_hero)
//or we can also use spred operator
const mainObj1={...marvel_hero, ...dc_hero}

console.log("ASIGN : ",mainObj1)

//Get Array of Objects fromDB practices

const myArray=[
    {
        id:1,
        name:"Anurag Singh",
        org:"Droom"
    },
    {
        id:2,
        name:"Anshuman Singh",
        org:"DU"
    },
    {
        id:3,
        name:"Abhinav Singh",
        org:"DU"
    },
    {
        id:4,
        name:"Ashutosh Singh",
        org:"BBD"
    },
    {
        id:5,
        name:"Asmit Singh",
        org:"AU"
    },
    {
        id:6,
        name:"Aditya Singh",
        org:"Self Made"
    }
]
//Getting the element from array
myArray.map(callBack=>{
   
//    console.log(callBack.name)

})


//object De-Structuring 

const DeSObj={
    deName:"Anurag Singh",
    deCourse:"JS",
    deType:"Beginer",
    deDuration:"1 Months"
}

const {deName:myName,deCourse:myCourse,deType:myType,deDuration:myDuration} = DeSObj

console.log(myCourse)