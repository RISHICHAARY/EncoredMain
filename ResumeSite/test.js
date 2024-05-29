/*const PDF = () => {
    return (
        <Document>
            <Page  size="A4" style={styles.Textage}>
                <View style={styles.toText}>
                    <View style={styles.ImageCol}>
                        <Image style={styles.Image1} alt="enco" src={Location.state.FileUrl}/>
                    </View>
                    <View style={styles.EmTextCol}>
                        <View style={styles.Textrofilealign} id="Textrofilename">
                            <Text id="name" style={styles.MainName}>{Location.state.Name}</Text>
                            <Text id="Textrofiles" style={styles.MainTextrof}>{Location.state.Textrofession}</Text>
                        </View>

                        <View style={styles.summary}>
                            <Text style={styles.linesTextace} id="Textrofile"><b>TextROFILE</b></Text>
                            <Text id="Textrofiles" style={styles.Textrofilesz}>{Location.state.Summary}</Text>
                        </View>
                        <View style={styles.Clear}></View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomleft}>
                        <View>
                            <Text id="name" style={styles.linesTextace}><b>CONTACT</b></Text>
                            <Text id="Textrofiles" style={styles.Textrofilesize}> {<FaPhoneAlt style={styles.STextlSTextace}/>}{Location.state.Mobile}</Text>
                            <Text id="Textrofiles" style={styles.Textrofilesize}> {<GrMail style={styles.STextlSTextace}/>}{Location.state.Email}</Text>
                            <Text id="Textrofiles" style={styles.Textrofilesize}> {<FaLocationPin style={styles.STextlSTextace}/>}{Location.state.Address}</Text>
                        </View>
                        <View>
                            <Text id="name" style={styles.linesTextace}><b>SKILLS</b></Text>
                            <Text id="Textrofiles" style={styles.Textrofilesize}>
                                {
                                    Location.state.Skills.trim().split(' ').map((key)=>{
                                        return(
                                        <Text key={key}>{key}</Text>)
                                    })
                                }
                            </Text>
                        </View>
                        <View>
                            <Text id="name" style={styles.linesTextace}><b>EDUCATION</b></Text>
                            {
                                Location.state.Education.map((key)=>{
                                    return(
                                        <>
                                        <Text id="Textrofiles" style={styles.Textrofilesize} key={key.Major}><b>{key.Major}</b></Text>
                                        <Text id="Textrofiles" style={styles.Textrofilesize} key={key.Ins}>{key.Ins}</Text>
                                        <Text id="Textrofiles" style={styles.Textrofilesize} key={key.Loc}>{key.Loc}</Text>
                                        </>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View style={styles.bottomright}>
                        <View>
                            <Text id="name" style={styles.linesTextace}><b>WORK EXTextERIENCE</b></Text>
                            {
                                Location.state.Work.map((key)=>{
                                    return(
                                        <>
                                        <Text id="Textrofiles" style={styles.Textrofilesize} key={key.Textos}><b>{key.Textos}</b></Text>
                                        <Text id="Textrofiles" style={styles.Textrofilesize} key={key.CmText}>{key.CmText}</Text>
                                        <Text id="Textrofiles" style={styles.Textrofilesize} key={key.Loc}>{key.Loc}</Text>
                                        </>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};


import ReactPDF , {
    Page,
    Text,
    View,
    Image,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";

import { PDFDownloadLink , PDFViewer } from '@react-pdf/renderer';




<PDFViewer>
<PDF/>
</PDFViewer>
<PDFDownloadLink document={<PDF />} fileName="fee_acceptance.pdf" className='Navigator-R'>
{({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
</PDFDownloadLink>





const styles = StyleSheet.create({
    page: {
        'backgroundColor': "#E4E4E4",
    },
    top: {
        "display": 'flex',
        'padding': '0.5rem',
        'padding-right': 0,
    },
    
    ImgCol: {
        'flex': '30%',
        'width': '30%',
    },
    
    EmpCol: {
        'flex': '70%',
        'width': '70%',
        'text-align': 'center',
    },
    
    bottom: {
        flex: 1,
        'box-sizing': 'border-box',
        'padding': '0.5rem',
    },
    
    enco1: {
        'text-align': 'right',
        'width': '100%',
    },
    
    encoalign: {
        'width': '100%',
        'min-height': '100%',
        'float': 'left',
    },
    
    SplSpace: {
        'padding-right': '0.2rem',
    },
    
    img1: {
        'width': '154px',
        'height': '180px',
        'float': 'right',
    },
    
    empname: {
        'width': '90%',
        'float': 'right',
    },
    
    bottomleft: {
        'width': '50%',
        'float': 'left',
    },
    
    bottomright: {
        'width': '50%',
        'float': 'right',
    },
    
    profilealign: {
        'text-align': 'center',
        'padding': 'auto 0.5rem',
        'font-size': '0.8rem',
    },
    
    profilesz: {
        'font-size': '0.6rem',
    },
    
    profilesize: {
        'font-size': '0.8rem',
        'padding-bottom': '0',
        'text-transform': 'capitalize',
    },
    
    MainName: {
        'font-weight': 'bold',
        'text-transform': 'uppercase',
        'font-size': '1rem',
       'margin': '0',
    },
    
    MainProf: {
        'font-weight': 'bold',
        'text-transform': 'uppercase',
        'font-size': '0.8',
        'margin':'0',
    },
    
    linespace: {
        'font-size': '1rem',
        'text-transform': 'uppercase',
        'letter-spacing': '3px',
        'margin': '0.4rem auto',
    },
    
    titlesize: {
        'font-size': '1rem',
        'margin': '0',
        'width': '100%',
        'text-align': 'center',
    },
    
    summary: {
        'background-color': '#545454',
        'border-style': 'solid',
        'border-color': '#545454',
        "color": "white",
        'text-align': "left",
        'min-height': '8rem',
        'padding-left': '0.5rem',
    },
    
    centerer: {
        'font-family': 'sans-serif',
        'text-align': "center",
    },
    
    mainheader: {
        "color": "goldenrod",
        'text-align': "center",
        'font-size': "large",
    },
    
    AIresume: {
        "display": "flex",
        'flex-direction': "row",
        'flex-wrap': "wrap",
        'margin-bottom': '0.75rem',
    }
});*/











<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PDF Text Extraction</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    #container {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      background-color: #f4f4f4;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      text-align: center;
      color: #333;
    }
    pre {
      white-space: pre-wrap;
      background-color: #fff;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div id="container">
    <h1>PDF Text Extraction</h1>
    <pre id="text-container">Extracted text will appear here</pre>
    <input type="file" id="file-input">
    <button onclick="extractText()">Extract Text</button>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
  <script>
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

    function extractText() {
      const fileInput = document.getElementById("file-input");
      const textContainer = document.getElementById("text-container");

      if (fileInput.files.length === 0) {
        alert("Please select a file to upload.");
        return;
      }

      const file = fileInput.files[0];
      if (file.name.endsWith(".pdf")) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const pdfData = new Uint8Array(event.target.result);
          const loadingTask = pdfjsLib.getDocument({ data: pdfData });

          loadingTask.promise.then(function(pdf) {
            const totalPageCount = pdf.numPages;
            const countPromises = [];
            for (let currentPage = 1; currentPage <= totalPageCount; currentPage++) {
              const page = pdf.getPage(currentPage);
              countPromises.push(page.then(function(page) {
                const textContent = page.getTextContent();
                return textContent.then(function(text) {
                  return text.items.map(function(s) {
                    return s.str;
                  }).join(" ");
                });
              }));
            }

            return Promise.all(countPromises).then(function(texts) {
              return texts.join(" ");
            });
          }).then(function(text) {
            textContainer.textContent = text;
          }).catch(function(error) {
            console.error("Error loading PDF:", error);
            textContainer.textContent = "An error occurred while loading the PDF.";
          });
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert("Unsupported file format. Please select a PDF file.");
      }
    }
  </script>
</body>
</html>





















