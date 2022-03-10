// index.js
// 获取应用实例
const app = getApp()

Page({ 
  data:{
    list_sm:[
      {
        picPath: "/images/pet1.png",
        age: 3,
        gender: "公",
        weight: 8,
        cut: true,
        vax: true,
        breed: "法牛"
      },
      {
        picPath: "/images/pet2.png",
        age: 3,
        gender: "公",
        weight: 5,
        cut: true,
        vax: true,
        breed: "未知"
        
      },
      {
        picPath: "/images/fish1.jpeg",
        age: 5,
        gender: "公",
        weight: 5,
        cut: true,
        vax: true,
        breed: "鱼"
      }
    ]
  },
   
  onDog:function(){
    let data = this.data.list_sm;
    let newData = [];

    for(let i = 0; i < data.length; i++){
      if(data[i].breed =="鱼" ){
        newData.push(data[i]);
      }
    }
    this.setData({
      list_sm:newData
    })
  }


})
