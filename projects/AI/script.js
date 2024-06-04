document.getElementById('jd').onclick = ()=>{
  window.open('https://discord.gg/ju4yQBfQ7p')
}


/*document.getElementById('ow').onclick = ()=>{
  window.open('https://www.buymeacoffee.com/mygx')
}*/
document.getElementById('fumes').checked = true
let dialog = document.getElementById('dialog')
let openbtn = document.getElementById('Advance Setting')
let closebtn = document.getElementById('close')
openbtn.onclick = ()=>{
  dialog.show()
  document.getElementById('imshow').style.border = '0px solid black transparent'
}
closebtn.onclick= ()=>{
  dialog.close()
  document.getElementById('imshow').style.background = 'linear-gradient(black, black) padding-box,linear-gradient(to right, red, blue) border-box' 
}
let inp = document.getElementById('inp')
let np = document.getElementById('np')
let gd = document.getElementById('gds')
let step = document.getElementById('step')
let seed = document.getElementById('seed')
let seedp = document.getElementById('seedp')
let stepp = document.getElementById('stepp')
let gdsp = document.getElementById('gdsp')
let btn = document.getElementById('create')
gd.addEventListener('input',()=>{
 gdsp.innerText = gd.value
})
step.addEventListener('input',()=>{
 stepp.innerText = step.value
})
seed.addEventListener('input',()=>{
 seedp.innerText = seed.value
})
isFumes = true
let prompt = ',RAW photo, photorealistic, extremely detailed informations, hyper:realistic,HIGHLY INTRICATE DETAILS,EXTREMELY MASTERPIECE'
let nps = ' ,(bad hands, bad anatomy, bad body, bad face, bad teeth, bad arms, bad legs, deformities:1.3),poorly drawn,deformed hands,deformed fingers,deformed faces,deformed eyes,mutated fingers,deformedbody parts,mutated body parts,mutated hands, disfigured,oversaturated,bad anatom,cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, deformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck,deformed eyes'
document.getElementById('styles').onchange = ()=>{
  const selectedStyle = document.querySelector('input[name="style"]:checked');
  if(selectedStyle.value =='photo'){
    isFumes = true
    prompt = ' ,RAW photo, portrait photo,(high detailed skin:1. 2), 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm'
    nps = ' ,deformed fingers,mutated hands,unrealistic hands,extra fingers,less fingers,mutated eyes,malformed hands,malformed fingers,malformed faces,malfromed eyes,malformed body parts,mutated body parts,mutated fingers,mutated hands,(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck'
  }
  if(selectedStyle.value == 'cinema'){
    isFumes = true
    prompt = ' ,cinematic film still awardwinning photo, highly detailed, high budget, bokeh, cinemascope, moody, epic, gorgeous, film grain, grainy'
    nps = ' ,deformed fingers,mutated hands,unrealistic hands,extra fingers,less fingers,mutated eyes,malformed hands,malformed fingers,malformed faces,malfromed eyes,malformed body parts,mutated body parts,mutated fingers,mutated hands,(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck'
  }
  if(selectedStyle.value == 'real'){
    isFumes = true
    prompt = ' ,RAW candid cinema,Modern colors, 16mm, beautiful,attractive,color graded portra 400 film, remarkable color, ultra realistic, textured skin, remarkable detailed pupils, realistic dull skin noise, visible skin detail, skin fuzz, dry skin, shot with cinematic camera, sun soaked colors'
    nps = ' ,deformed fingers,mutated hands,unrealistic hands,extra fingers,less fingers,mutated eyes,malformed hands,malformed fingers,malformed faces,malfromed eyes,malformed body parts,mutated body parts,mutated fingers,mutated hands,poorly drawn,lowres, disfigured,bad anatomy,deformed body features ,cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck,deformed eyes'
  }
  if(selectedStyle.value == 'fantasy'){
    isFumes = true
    prompt = ' ,centered shot, wide angle, full body, dd, fantasy, highly detailed, digital painting, artstation, smooth, sharp focus, digital art'
    nps = ' ,deformed fingers,mutated hands,unrealistic hands,extra fingers,less fingers,mutated eyes,malformed hands,malformed fingers,malformed faces,malfromed eyes,malformed body parts,mutated body parts,mutated fingers,mutated hands,missing legs, missing feet, worst quality, low quality, jpeg artifacts, signature, logo, watermark, text, realistic, hyper-realistic, ultra-detailed, RAW photo'
  }
  if(selectedStyle.value == 'anime'){
     isFumes = true
    prompt = ' ,masterpiece,HDR,anime,anime style,beuatiful anime'
    nps = ' ,malformed hands,malformed fingers,malformed faces,malformed body parts,mutated body parts,malfromed eyes,mutated fingers,mutated hands,realistic,worst quality, low quality, blurry, pixelated, extra limb, extra fingers, bad hand, text, name, letters, out of frame, lowres, text, error, cropped, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature'
  }
  if(selectedStyle.value == 'fumes'){
     isFumes = true
    let prompt = ' ,RAW photo,dynamic lights, photorealistic, extremely detailed informations, dynamic colors,realistic,SciFi,award winning photography,film grain,beautiful,attarctive'
let nps = ' ,deformed fingers,mutated hands,unrealistic hands,extra fingers,less fingers,mutated eyes,poorly drawn,malformed hands,malformed fingers,malformed faces,malformed body parts,mutated body parts,malfromed eyes,mutated fingers,mutated hands, disfigured,oversaturated,bad anatomy,deformed body features ,cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck,deformed eyes'
  }
  if(selectedStyle.value == 'no'){
    prompt = ''
    nps = ''
    isFumes = false
  }
}

isf = false
let isreal = false
reload = false
let fullPrompt =  inp.value+prompt
setTimeout(()=>{
  reload = true
},250000)
btn.onclick = async ()=>{ 
  let isc = false
  let id = ''
  if(reload == true){
    window.location.reload();
  }
 if(isFumes == 'no'){
   fullPrompt = inp.value
   const div = document.getElementById('imshow');
   div.innerHTML = '';
   document.getElementById('imshow').innerHTML = ''
   let pi = document.createElement('p')
   pi.innerText = 'Generating Image... Estimated Time: 20s'
   document.getElementById('imshow').append(pi)
   let chatId = Math.floor(Math.random() * 99999999) + 1;
  let data = {
 prompt: inp.value+prompt
};
await fetch('https://flask-hello-world-murex-sigma.vercel.app/generate', {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(data =>{
id = data
})
.catch((error) => {
console.error('Error:', error);
});


 }
 else{
  fullPrompt =  inp.value+prompt
 }

let X = false
//https://hacking-is-serious-illegal-crime-you.onrender.com/sdxl
let url2 = 'https://hacking-is-serious-illegal-crime-you.onrender.com/get_prediction'
let idlist = []
 url =  'https://flask-hello-world-murex-sigma.vercel.app/predict'
var selectElement = document.getElementById("model");
var selectedIndex = selectElement.selectedIndex;
if (selectedIndex === -1) {
    console.log("No option is selected.");
} else {
    var selectedOption = selectElement.options[selectedIndex];
   
    if(selectedOption.value == 'rv6'){
     url =  'https://flask-hello-world-murex-sigma.vercel.app/proteus'
     isreal = false
    }
    if(selectedOption.value == 'ds8'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/dream'
      if(step.value>50){
        step.value = 50
      }
      isreal = false
    }
    if(selectedOption.value == 'ra'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/playground'
      isreal = false
    }
    if(selectedOption.value == 'ar'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/predict'
      isreal = false
    }
    if(selectedOption.value == 'er'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/pixart'
      isreal = false
    }
    if(selectedOption.value == 'anything'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/anything'
      isreal = false
      fullPrompt = inp.value + ", anime, anime style" 
    }
    if(selectedOption.value == 'focus'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/focus'
      url2 = 'https://hacking-is-serious-illegal-crime-you.onrender.com/foocus'
      isf = true
      isreal = false
    }
    if(selectedOption.value == 'cas'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/cascade'
      url2 = 'https://hacking-is-serious-illegal-crime-you.onrender.com/cascade'
      isc = true
      isreal = false
    }
      if(selectedOption.value == 'w'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/w'
      url2 = 'https://hacking-is-serious-illegal-crime-you.onrender.com/get_prediction'
      isreal = false
    }
      if(selectedOption.value == 'k'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/k'
      url2 = 'https://hacking-is-serious-illegal-crime-you.onrender.com/get_prediction'
      isreal = false
        
    }
      if(selectedOption.value == 'op'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/op'
      url2 = 'https://hacking-is-serious-illegal-crime-you.onrender.com/get_prediction'
      isreal = false
    }
      if(selectedOption.value == 'p3'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/p3'
      url2 = 'https://hacking-is-serious-illegal-crime-you.onrender.com/get_prediction'
      isreal = false
    }
      if(selectedOption.value == 'emo'){
      url =  'https://flask-hello-world-murex-sigma.vercel.app/emo'
      url2 = 'https://hacking-is-serious-illegal-crime-you.onrender.com/get_prediction'
      isreal = false
    }
    if(selectedOption.value == 'real'){
      isreal = true
      if(step.value>50){
        step.value = 50
      }
    }
      if(selectedOption.value == 'realX'){
        isreal = true
        X = true
      if(step.value>50){
        step.value = 50
        
      }
    }
  
}
negative_prompt = nps
btn.disabled = true
const div = document.getElementById('imshow');
div.innerHTML = '';
document.getElementById('imshow').innerHTML = ''
let pi = document.createElement('p')
pi.innerText = 'Generating Image... Estimated Time: 20s'
document.getElementById('imshow').append(pi)
let count = 0;
seed = seed
if(isreal == false){
  async function generate(){
    params={
    
         'prompt': fullPrompt,
         'negative_prompt': np.value+nps,
         "steps": step.value,
         'gd': gd.value
     };
   
 
     try {
         const response = await fetch(url, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Connection': 'keep-alive',
             },
             body: JSON.stringify(params)
         });
         if (response.status ===  429) {
           pi.innerText = 'you have reached your limit of 50 generation per hour, you will get 50 more image generaions after an hour!!'
         }
     /*    console.log(np.value)
         const imgData = await response.text(); 
         const div = document.getElementById('imshow')
         const img = document.createElement('img');
         pi.innerHTML = ''
         pi.innerText = ''
         img.src = imgData;
         div.appendChild(img);
         */
         
         const imgData = await response.text(); 
         idlist.push(imgData)
         
         
     } catch (error) {
       btn.disabled = false
         console.error('An error occurred:', error);
         pi.innerText = 'An error occurred, try changing your prompt';
     }
 
 
 }
 
 await Promise.all([generate()]);
 
 setTimeout(()=>{
  /* function final2(){
   const id = idlist[1].trim().replace(/^"|"$/g, '');
 fetch(url2, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
     },
     body: JSON.stringify({
         id: id,
     }),
 })
 .then((response) => response.text())  
 .then((data) => {
   const img = document.createElement('img');
         pi.innerHTML = ''
         pi.innerText = ''
         img.src = data.trim().replace(/^"|"$/g, '');
         div.appendChild(img);
         btn.disabled = false
         console.log(data)
 })
 .catch((error) =>{
   btn.disabled = false
         console.error('An error occurred:', error);
         pi.innerText = 'An error occurred, try changing your prompt';
 });
 }*/
 function final1(){
  const id = idlist[0].trim().replace(/^"|"$/g, '');
fetch(url2, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id: id,
    }),
})
.then((response) => response.text())  
.then((data) => {
  const img = document.createElement('img');
        pi.innerHTML = ''
        pi.innerText = ''
        img.src = data.trim().replace(/^"|"$/g, '');
        div.appendChild(img);
        btn.disabled = false
        console.log(data)
})

.catch((error) => {
  btn.disabled = false
        console.error('An error occurred:', error);
        pi.innerText = 'An error occurred, try changing your prompt';
});
}
 
 
 final1()
 },8000)
}
if(isreal == true){
  console.log('hh')
  url = 'https://hacking-is-serious-illegal-crime-you.onrender.com/real'
  if(X==true){
    url = 'https://hacking-is-serious-illegal-crime-you.onrender.com/realX'
    console.log(8)
}
  else{
    url = 'https://hacking-is-serious-illegal-crime-you.onrender.com/real'
}
  function final1(){

    
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: inp.value,
        nprompt: np.value + ' ,(bad hands, bad anatomy, bad body, bad face, bad teeth, bad arms, bad legs, deformities:1.3),poorly drawn,deformed hands,deformed fingers,deformed faces,deformed eyes,mutated fingers,deformedbody parts,mutated body parts,mutated hands, disfigured,oversaturated,bad anatom,cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, deformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck,deformed eyes',
        steps: step.value,
        gd: gd.value
      }),
  })
  .then((response) => response.text())  
  .then((data) => {
    const img = document.createElement('img');
          pi.innerHTML = ''
          pi.innerText = ''
          img.src = data.trim().replace(/^"|"$/g, '');
          div.appendChild(img);
          btn.disabled = false
          console.log(data)
  })
  
  .catch((error) => {
    btn.disabled = false
          console.error('An error occurred:', error);
          pi.innerText = 'An error occurred, please try again or use another model';
  });
  }
  final1()
}

}