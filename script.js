const api="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";
const inp=document.getElementById("inp");
const images=document.querySelector(".images");

const getImage=async () => {
    // make request
    const methods = {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}` 
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,            ///image numbers
                "size":"256x256"  ///image size
            } 
        )
    }
const res= await fetch("https://api.openai.com/v1/images/generations",methods)
// response as json
const data=await res.json()
const listImages=data.data;
images.innerHTML=''
listImages.map(photo => {
    const container=document.createElement("div")
    images.append(container)
    const img=document.createElement("img")
    container.append(img)
    img.src=photo.url
    
})
}