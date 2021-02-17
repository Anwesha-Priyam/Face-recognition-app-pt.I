Webcam.set(
    {
    width:370,
    height:320,
    image_format:'png',
    png_quality:90
    }
);
Webcam.attach("#camera");
camera=document.getElementById("camera");

function Takepic()
{
    Webcam.snap(function(data_uri)
        {
            document.getElementById("PicResult").innerHTML='<img id="Takenpic" src="'+data_uri+'"/>';
        });
}

console.log('ml5 version-', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aCbWiLQqk/model.json', modelLoaded);
function modelLoaded()
{
    console.log("Model Loaded")
}
