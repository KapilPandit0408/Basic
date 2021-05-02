var mongoose = require("mongoose");
var State = require("./models/state");
var Comment = require("./models/comment")

var data = [
    {
        name:"Maharashtra", 
        image:"https://www.planetware.com/wpimages/2019/08/india-mumbai-top-attractions-take-pictures-taj-mahal-palace-mumbai.jpg",
        history:"महाराष्ट्र हे भारतातील पश्चिम भागातले एक राज्य आहे. क्षेत्रफळाच्या दृष्टीने महाराष्ट्र भारतातील तिसरे व लोकसंख्येच्या बाबतीत दुसरे मोठे राज्य आहे. महाराष्ट्र हे भारतातील सर्वांत विकसनशिल राज्यांपैकी एक आहे. महाराष्ट्र राज्याची सीमा गुजरात, मध्य प्रदेश, छत्तीसगढ, तेलंगणा, कर्नाटक, गोवा आणि दादरा आणि नगर-हवेली या केंद्रशासित प्रदेशांशी जोडलेली आहे. राज्याच्या पश्चिमेला अरबी समुद्राची ७२० कि.मी. ची किनारपट्टी आहे. जवळपास ११ कोटी लोकसंख्या असलेल्या महाराष्ट्राची राजधानी मुंबई आहे. मुंबईत साधारण १.८ कोटी लोक राहतात. नागपूर शहर महाराष्ट्राची उपराजधानी आहे. मध्ययुगीन महाराष्ट्र सातवाहन राजवंश राष्ट्रकूट राजवंश, पश्चिम चालुक्य, मुघल आणि मराठ्यांच्या साम्राज्याचा समावेश आहे. विस्तार १, १८, ८०९ चौरस मैल (३,०७, ७१० चौरस किमी) असून, तो पश्चिम आणि कर्नाटक, तेलंगणा, गोवा, गुजरात, छत्तीसगड, मध्य प्रदेश आणि दादरा आणि नगर हवेली भारतीय राज्यांना अरबी समुद्र लागून आहे. महाराष्ट्राला जगद्गुरु संत तुकाराम, संत ज्ञानेश्र्वर, संत चोखामेळा, संत एकनाथ, संत नामदेव, संत गाडगेबाबा यासारख्या अनेक महान संतांचा वारसा लाभला आहे, त्यामुळे या राज्यास संतांची भूमी असेदेखील म्हटले जाते. येथूनच अभिनेते, राजकारणी आणि क्रिकेटपटू तयार होतात. जगात महाराष्ट्राचे नाव गाजविणारे सचिन तेंडुलकर हे क्रिकेटपटू महाराष्ट्रातले आहेत. मुघल साम्राज्याविरुद्ध लढा देऊन हिंदवी स्वराज्याची स्थापना करणारे छत्रपती शिवाजी महाराज याच राज्यातील आहेत."
    },
    {
        name:"Delhi", 
        image:"https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Things-To-Do-In-Delhi-21_nov.jpg",
        history:"भारत की राजधानी, दिल्ली की सशक्त ऐतिहासिक पृष्ठभूमि रही है। यहां भारतीय इतिहास के कुछ सर्वाधिक शक्तिशाली सम्राटों ने शासन किया था। शहर का इतिहास महाभारत के जितना ही पुराना है। इस शहर को इंद्रप्रस्थ के नाम से जाना जाता था, जहां कभी पांडव रहे थे। समय के साथ-साथ इंद्रप्रस्थ के आसपास आठ शहर : लाल कोट, दीनपनाह, किला राय पिथौरा, फिरोज़ाबाद, जहांपनाह, तुगलकाबाद और शाहजहानाबाद बसते रहे। पांच शताब्दियों से भी अधिक समय से दिल्ली राजनीतिक उथल-पुथल की गवाह रही है। यहां खिलजी और तुगलक वंशों के बाद मुग़लों ने शान किया। India Gate वर्ष 1192 में अफगान योद्धा मोहम्मद गौरी ने राजपूतों के शहर पर कब्जा किया 1206 में दिल्ली सल्तनत की नींव रखी। 1398 में दिल्ली पर तैमूर के हमले ने सल्तनत का खात्मा किया; लोधी, जो दिल्ली के अंतिम सुल्तान साबित हुए के बाद बाबर ने सत्ता संभाली, जिसने 1526 में पानीपत की लड़ाई के बाद मुग़ल साम्राज्य की स्थापना की। आरंभिक मुग़ल शासकों ने आगरा को अपनी राजधानी बनाया और दिल्ली शाहजहां द्वारा पुरानी दिल्ली की दीवार के निर्माण 1638 के बाद ही यह शहर उनकी स्थायी गद्दी बन पाया। हिन्दू राजाओं से लेकर मुस्लिं सुल्तानों तक, दिल्ली का शासन एक शासक से दूसरे शासक के हाथों जाता रहा। शहर की मिट्टी खून, कुर्बानी और देश-प्रेम से सींची हुई है। प्राचीन काल से ही पुरानी 'हवेलियां' और इमारतें खामोश खड़ी हैं किन्तु उनका खामोशियां अपने मालिकों और उन लोगों को सदाएं देती हैं जो सैंकड़ों वर्षों पहले उनमें रहे थे। 1803 ई. में शहर पर अंग्रेजों का कब्जा हो गया। वर्ष 1911 में, अंग्रेजों ने कलकत्ता से बदलकर दिल्ली को अपनी राजधानी बनाया। यह शहर पुनः शासकीय गतिविधियों का केन्द्र बन गया। किन्तु, शहर की प्रतिष्ठा है कि वह अपनी गद्दी पर बैठने वालों को बदलती रहा है। इनमें ब्रिटिश और वे वर्तमान राजनीतिक पार्टियां भी शामिल हैं, जिन्हें स्वतंत्र भारत का नेतृत्व करने का गौरव हासिल हुआ है। 1947 में स्वतंत्रता प्राप्ति के बाद, नई दिल्ली को अधिकारिक तौर पर भारत की राजधानी घोषित किया गया।"
    },
    {
        name:"Punjab", 
        image:"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/06/shutterstock_725535832.jpg"
    },
    {
        name:"Kerala", 
        image:"https://www.ekeralatourism.net/wp-content/uploads/2018/03/Idukki.jpg"
    },
    {
        name:"Rajasthan", 
        image:"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/06/shutterstock_404519536.jpg"
    },
    {
        name:"Goa", 
        image:"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/06/shutterstock_590864483.jpg"
    },
    {
        name:"Himachal Pradesh", 
        image:"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/06/shutterstock_295945163.jpg"
    },
    {
        name:"Uttar Pradesh", 
        image:"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2015/06/shutterstock_454971472.jpg",
        history:"What is India’s architectural answer to love? The Taj Mahal in Agra, of course. What about spirituality and salvation? Located along the Ganges river, the answer lies in Varanasi, India’s oldest city. As such, Uttar Pradesh is one of India’s prettiest states, and is home to major historical, religious and architectural Indian destinations. Two of the most important pilgrimage sites for Hindus are also found in Uttar Pradesh: the ancient cities of Ayodhya and Allahabad."
    }
]

function seedDB () {
    //Remove All State
    State.remove({}, (err) => {
        if(err) {
            console.log(err);
        }
        console.log("Removed States");
        // Add Few States
    data.forEach((seed) => {
        State.create(seed, (err, state) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log("Added New states")
                // Create a Comment
                Comment.create(
                    {
                        text: "This is a great place",
                        author: "Kapil"
                    }, (err, comment) => {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            state.comments.push(comment);
                            state.save();
                            console.log("Created new comment");
                            console.log("Server Started")
                        }
                        
                    }
                )
            }
        })
    })
    });
    
}
console.log("Server Started")
module.exports = seedDB;