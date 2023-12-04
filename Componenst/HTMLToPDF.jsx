import React, {useEffect, useState} from 'react';
import {View, Button, PermissionsAndroid, Linking} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

const HTMLToPDFConverter = ({navigation}) => {
  const [first, setfirst] = useState();
  useEffect(() => {
    // ViewPDF();
    // SharePDF();
    openPDFViewer();
  }, [first]);

  const name = '',
    age = 0,
    gender = '',
    height = 0,
    weight = 0,
    result = {
      timestamp: new Date(),
      bp_sys: 0,
      bp_dia: 0,
      resp_rate: 0,
      oxy_sat_prcnt: 0,
      heart_rate: 0,
      bmi: 0,
      sdnn: 0,
      rmssd: 0,
      pNN50_per: 0,
      cardiac_out: 0.0,
      map: 0,
      heart_utilized: 0,
      HRMax: 0,
      HRR: 0,
      THRR: 0,
      vo2max: 0.0,
    };
  const convertToPDF = async () => {
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>CarePlix Report</title>
    <meta name="description" content="Report generated from CarePlix Vitals Scan" />
    <meta name="theme-color" content="#feffff">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
        @page {
            size: A4 portrait;
            margin: 0;
        }

        body {
            margin: 0;
            background-color: #fff;
            font-family: 'Poppins', sans-serif;
        }

        header,
        footer {
            position: fixed;
            left: 0;
            right: 0;
        }

        footer {
            bottom: 0;
            height: 48px;
            background-color: #192852;
        }

        header {
            top: 0;
            height: 100px;
            background-color: #f7f7f7;
            padding: 16px 48px;
            box-sizing: border-box;
        }

        .headerIcon {
            display: block;
            margin: 0 auto;
            height: 100%;
        }

        main section {
            padding: 32px 64px;
            page-break-before: always;
        }

        .row {
            display: flex;
            justify-content: space-between;
        }

        .largeText {
            font-size: 16px;
            font-weight: 700;
        }

        .normalText {
            font-size: 14px;
            font-weight: 600;
        }

        .smallText {
            font-size: 12px;
        }
    </style>
</head>

<body>
    <header><img class="headerIcon" src="Careplix.png" alt="CompanyLogo"></header>
    <table style="border-collapse: collapse;">
        <thead>
            <tr>
                <td>
                    <div style="height: 100px;">&nbsp;</div>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <main>
                        <section style="page-break-before: avoid;">
                            <div class="row">
                                <div>
                                    <p class="largeText" style="text-transform: capitalize;">
                                        ${name}
                                    </p>
                                    <p class="normalText" style="font-weight: 400;">
                                        <span style="font-weight: 600;">Gender: </span>
                                        <span>${gender}</span>
                                    </p>
                                    <p class="normalText" style="font-weight: 400;">
                                        <span style="font-weight: 600;">Age: </span>
                                        <span>${age} years</span>
                                    </p>
                                    <p class="normalText" style="font-weight: 400;">
                                        <span style="font-weight: 600;">Height: </span>
                                        <span>${height} cms</span>
                                    </p>
                                    <p class="normalText" style="font-weight: 400;">
                                        <span style="font-weight: 600;">Weight: </span>
                                        <span>${weight} kgs</span>
                                    </p>
                                </div>
                                <div>
                                    <p class="normalText" style="font-weight: 400;">
                                        <span style="font-weight: 600;">Assessment Date: </span>
                                        <span>${result.timestamp.toLocaleDateString(
                                          undefined,
                                          {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                          },
                                        )}</span>
                                    </p>
                                    <p class="normalText" style="font-weight: 400;">
                                        <span style="font-weight: 600;">Assessment Time: </span>
                                        <span>${result.timestamp.toLocaleTimeString(
                                          undefined,
                                          {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true,
                                          },
                                        )}</span>
                                    </p>
                                </div>
                            </div>
                            <p class="largeText"
                                style="max-width: max-content; margin: 36px auto; padding: 8px 32px; border-radius: 10px; background-color: #3298f1; color: #fff; font-weight: 500;">
                                Digital Health Assessment Report
                            </p>
                            <div class="row">
                                <div style="width: 40%;">
                                    <p class="normalText">Key Body Vitals</p>
                                    <p class="smallText" style="margin-top: 10px;">Blood Pressure</p>
                                    <p class="smallText" style="margin-top: 10px;">Respiration Rate</p>
                                    <p class="smallText" style="margin-top: 10px;">Oxygen Saturation</p>
                                </div>
                                <div style="width: 30%;">
                                    <p class="normalText">Value</p>
                                    <p class="smallText" style="margin-top: 10px;">
                                        ${result.bp_sys}/${result.bp_dia} mmHg
                                    </p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.resp_rate
                                    }/min</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.oxy_sat_prcnt
                                    }%</p>
                                </div>
                                <div style="width: 30%;">
                                    <p class="normalText">Range</p>
                                    <p class="smallText" style="margin-top: 10px;">90-120/60-80 mmHg</p>
                                    <p class="smallText" style="margin-top: 10px;">12-20/min</p>
                                    <p class="smallText" style="margin-top: 10px;">95-100%</p>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 36px;">
                                <div style="width: 40%;">
                                    <p class="normalText">Heart Health</p>
                                    <p class="smallText" style="margin-top: 10px;">Heart Rate</p>
                                </div>
                                <div style="width: 30%;">
                                    <p class="normalText">Value</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.heart_rate
                                    } bpm</p>
                                </div>
                                <div style="width: 30%;">
                                    <p class="normalText">Range</p>
                                    <p class="smallText" style="margin-top: 10px;">60-100 bpm</p>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 36px;">
                                <div style="width: 40%;">
                                    <p class="normalText">Physiological</p>
                                    <p style="margin-top: 4; width: 75%; font-size: 9px; font-weight: 300;">
                                        *Calculated based on height and weight given by you.
                                    </p>
                                    <p class="smallText" style="margin-top: 10px;">BMI</p>
                                </div>
                                <div
                                    style="width: 30%; display: flex; flex-direction: column; justify-content: space-between;">
                                    <p class="normalText">Value</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.bmi
                                    } kg/m²</p>
                                </div>
                                <div
                                    style="width: 30%; display: flex; flex-direction: column; justify-content: space-between;">
                                    <p class="normalText">Range</p>
                                    <p class="smallText" style="margin-top: 10px;">18.5-24.9 kg/m²</p>
                                </div>
                            </div>
                            <div
                                style="margin-top: 36px; padding: 24px; border-radius: 10px; background-color: #f1f1f1;">
                                <p class="normalText" style="font-weight: 700;">DISCLAIMER:</p>
                                <p class="smallText" style="margin-top: 8px; text-align: justify;">
                                    For Investigational Use Only. Careplix is not a substitute for the clinical judgment
                                    of a healthcare professional. Careplix is intended to improve your awareness of
                                    general wellness. Careplix does not diagnose, treat, mitigate or prevent any
                                    disease, symptom, disorder or abnormal physical state. Consult with a health care
                                    professional or emergency services if you believe you may have a medical issue.
                                </p>
                            </div>
                        </section>
                        <section>
                            <div class="row">
                                <div style="width: 40%;">
                                    <p class="normalText">Heart Health</p>
                                    <p class="smallText" style="margin-top: 10px;">SDNN</p>
                                    <p class="smallText" style="margin-top: 10px;">RMSSD</p>
                                    <p class="smallText" style="margin-top: 10px;">PNN50</p>
                                    <p class="smallText" style="margin-top: 10px;">Cardiac Output</p>
                                    <p class="smallText" style="margin-top: 10px;">Mean Arterial Pressure</p>
                                    <p class="smallText" style="margin-top: 10px;">Heart Utilization<br />&nbsp;</p>
                                    <p class="smallText" style="margin-top: 10px;">Heart Rate Max</p>
                                    <p class="smallText" style="margin-top: 10px;">Heart Rate Reserve</p>
                                    <p class="smallText" style="margin-top: 10px;">Target HR Range</p>
                                    <p class="smallText" style="margin-top: 10px;">VO2Max</p>
                                </div>
                                <div style="width: 30%;">
                                    <p class="normalText">Value</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.sdnn
                                    } msec</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.rmssd
                                    } msec</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.pNN50_per
                                    }%</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.cardiac_out
                                    } L/min</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.map
                                    } mmHg</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.heart_utilized
                                    }%<br />&nbsp;
                                    </p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.HRMax
                                    } bpm</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.HRR
                                    } bpm</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.THRR
                                    } bpm</p>
                                    <p class="smallText" style="margin-top: 10px;">${
                                      result.vo2max
                                    } mL/kg/min</p>
                                </div>
                                <div style="width: 30%;">
                                    <p class="normalText">Range</p>
                                    <p class="smallText" style="margin-top: 10px;">60-100 msec</p>
                                    <p class="smallText" style="margin-top: 10px;">20-89 msec</p>
                                    <p class="smallText" style="margin-top: 10px;">&gt;3%</p>
                                    <p class="smallText" style="margin-top: 10px;">4-8 L/min</p>
                                    <p class="smallText" style="margin-top: 10px;">70-100 mmHg</p>
                                    <p class="smallText" style="margin-top: 10px;">&lt;50% (At rest)<br />51-85%
                                        (Moderate intensity)
                                    </p>
                                    <p class="smallText" style="margin-top: 10px;">--</p>
                                    <p class="smallText" style="margin-top: 10px;">--</p>
                                    <p class="smallText" style="margin-top: 10px;">--</p>
                                    <p class="smallText" style="margin-top: 10px;">
                                        42.5 ml/kg/min (Male)<br />
                                        33 ml/kg/min (Female)
                                    </p>
                                </div>
                            </div>
                            <div
                                style="margin-top: 36px; padding: 24px; border-radius: 10px; background-color: #f1f1f1;">
                                <p class="normalText" style="font-weight: 700;">DISCLAIMER:</p>
                                <p class="smallText" style="margin-top: 8px; text-align: justify;">
                                    For Investigational Use Only. Careplix is not a substitute for the clinical judgment
                                    of a healthcare professional. Careplix is intended to improve your awareness of
                                    general wellness. Careplix does not diagnose, treat, mitigate or prevent any
                                    disease, symptom, disorder or abnormal physical state. Consult with a health care
                                    professional or emergency services if you believe you may have a medical issue.
                                </p>
                            </div>
                        </section>
                        <section>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Heart Rate</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    The heart rate is the number of times heart beats in a minute. A normal resting
                                    heart rate for adults ranges from 60 to 100 beats per minute.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Respiration Rate</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    The respiration rate is the number of breaths taken in a minute. The rate is usually
                                    measured when a person is at rest and simply involves counting the number of breaths
                                    for one minute by counting how many times the chest rises.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Oxygen Saturation</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    Oxygen saturation (SpO2) is the measurement of how much oxygen the blood is carrying
                                    as a percentage of the maximum it could carry.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Blood Pressure</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    Blood pressure is a measure of the force that the heart uses to pump blood around
                                    the body. Blood pressure is measured in millimeters of mercury (mmHg) and is given
                                    as 2 figures:<br />Systolic pressure - the pressure when your heart pushes blood
                                    out<br />Diastolic pressure - the pressure when your heart rests between beats
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Stress Index</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    Stress is the reaction to everyday pressure due to emotional or physical tension.
                                    Stress Index &lt; 1.5 is considered to be normal.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Blood Volume</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    Blood volume refers to the amount of blood present in an individual's circulatory
                                    system. The average human adult has nearly 4.5-5.7 liters of circulating blood.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">BMI</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    BMI is the measure of body fat based on height and weight. The normal range of BMI
                                    is 18.5 - 24.9 kg/m².
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">
                                    Total Body Water & Body water Percentage
                                </p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    Total body water is the amount of water present in the human body. This includes
                                    fluids both inside and outside of cells. An adult body water percentage should fall
                                    between 40% and 60%.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">
                                    Calorie from Carb & Fat
                                </p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    Calorie from carbohydrate is that amount of energy obtained from consumption of
                                    Carbohydrate. Calorie from fat is the measurement of the energy obtained from
                                    consumption of fat.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Heart Rate Max</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                 The highest number of beats the heart can pump per minute is the maximum heart rate.
                                 </p>
                          </div>
                           
                        </section>
                        <section>
                           
                            <div style="margin-bottom: 20px;">
                               <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">
                              Total Body Fat Percentage
                               </p>
                              <p class="normalText" style="font-weight: 300; text-align: justify;">
                                Body fat percentage is basically the proportion of the mass of fat in our body
                               relative to the total mass of our body.
                              </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">SDNN</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    The standard deviation of all of the NN intervals (the time intervals between each
                                    heartbeat). Higher numbers usually indicate that your body is coping better with
                                    stress.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">RMSSD</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    The root mean square of successive intervals between normal heartbeats (RMSSD).
                                    RMSSD is obtained by first calculating each successive time intervals between
                                    heartbeats in msec.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">PNN50</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    PNN50 is the proportion of adjacent N-N intervals differing by more than 50 msec.
                                    pNN50 lower than 3% is considered indicative of high risk.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Cardiac Output</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    The amount of blood heart pumps through the circulatory system in a minute. Cardiac
                                    output in humans is generally 4-8 L/min in an at-rest.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">
                                    Mean Arterial Pressure
                                </p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    MAP is the average arterial pressure throughout one heart cycle. MAP anything
                                    between 70 and 100 mmHg is considered to be normal.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Heart Utilization</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    Heart utilization is the percentage of overall heart usage to its maximum peak heart
                                    rate. Generally &lt; 50% utilization at rest and 51-85% utilization at moderate
                                    intensity is considered as normal.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">
                                    Heart Rate Reserve
                                </p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    Heart rate reserve is the difference between your maximum (peak) heart rate and your
                                    resting heart rate.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">VO2Max</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    VO2Max is the amount of oxygen the body uses during exercise. It is a measurement to
                                    understand Physical fitness.
                                </p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="largeText" style="font-weight: 600; margin-bottom: 6px;">Target Heart Rate</p>
                                <p class="normalText" style="font-weight: 300; text-align: justify;">
                                    To achieve a certain level of exertion, there is a minimum number of heartbeats
                                    required within a specific timeframe.
                                </p>
                            </div>
                        </section>
                    </main>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>
                    <div style="height: 48px;">&nbsp;</div>
                </td>
            </tr>
        </tfoot>
    </table>
    <footer></footer>
</body>

</html>
  `;

    let Name = 'CareplixScanReport';
    const options = {
      html: htmlContent,
      fileName: Name, // Specify the file name without the file extension
      directory: 'documents', // Choose the target directory (e.g., 'Documents', 'Download', etc.)
      height: 297, // A4 height in points
      width: 210, // A4 width in points
    };
    ///with rnfetchblob
    try {
      const pdf = await RNHTMLtoPDF.convert(options);
      const sourcePath = pdf.filePath;
      //   const createpath = RNFS.DownloadDirectoryPath;
      const path = RNFS.DownloadDirectoryPath + '/' + `${Name}.pdf`; ///custom directory path
      const destinationPath = path;
      moveFile(sourcePath, destinationPath);
    } catch (error) {
      console.error('Error moving file:', error);
    }
    ////with rnfs
    // try {
    //   const pdf = await RNHTMLtoPDF.convert(options);
    //   const createpath = RNFS.DownloadDirectoryPath;
    //   const path = RNFS.DownloadDirectoryPath + '/' + `${Name}.pdf`; ///custom directory path
    //   ///to get permission from android to save file in device
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //     {
    //       title: 'Storage Permission',
    //       message: 'App needs access to your storage to save the file.',
    //       buttonNeutral: 'Ask Me Later',
    //       buttonNegative: 'Cancel',
    //       buttonPositive: 'OK',
    //     },
    //   );
    //   setfirst(`file://${path}`);
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     // Continue with the copy/move operation of file
    //     // await RNFS.moveFile(pdf.filePath, path); ///MOVE FILE TO DESIRED LOCATION
    //     // await RNFS.copyFile(pdf.filePath, path);   ////COPY FILE TO DESIRED LOCATION
    //     ///if not destination , creates the destinatin  folder and move
    //     RNFS.exists(createpath)
    //       .then(directoryExists => {
    //         if (!directoryExists) {
    //           // If the directory doesn't exist, create it
    //           return RNFS.mkdir(createpath);
    //         }
    //         // If the directory exists, proceed to move the file
    //         return Promise.resolve();
    //       })
    //       .then(() => {
    //         // Move the file to the destination directory
    //         return RNFS.moveFile(pdf.filePath, path);
    //       })
    //       .then(success => {
    //         console.log('File moved successfully:', success);
    //       })
    //       .catch(error => {
    //         console.error('Error:', error);
    //       });
    //   } else {
    //     console.error('Storage permission denied');
    //   }
    // } catch (error) {
    //   console.error('Error generating PDF:', error);
    // }
  };

  const moveFile = async (sourcePath, destinationPath) => {
    const createpath = RNFS.DownloadDirectoryPath;
    try {
      ///to get permission from android to save file in device
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to save the file.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      // Check if the destination directory exists
      const isDir = await RNFetchBlob.fs.isDir(createpath);

      if (!isDir) {
        // If the directory doesn't exist, create it
        await RNFetchBlob.fs.mkdir(createpath);
      }
      // Read the file data
      const fileData = await RNFetchBlob.fs.readFile(sourcePath, 'base64');

      // Write the file data to the destination
      await RNFetchBlob.fs.writeFile(destinationPath, fileData, 'base64');

      // Remove the original file (optional)
      await RNFetchBlob.fs.unlink(sourcePath);
      setfirst(`file://${destinationPath}`);
      console.log('File moved successfully!');
    } catch (error) {
      console.error('Error moving file:', error);
    }
  };
  ///view pdf in device pdf viewer without packges list options in screen
  const openPDFViewer = () => {
    const filePath = first;
    try {
      if (filePath) {
        Linking.openURL(`file://${filePath}`)
          .then(res => {
            console.log('file opened successfully');
          })
          .catch(error => {
            console.error('Error opening PDF file: ', error);
            Alert.alert(
              'Error',
              'Could not open PDF file. Please install a PDF viewer.',
            );
          });
      }
    } catch (error) {
      console.error('Error opening PDF:', error);
    }
  };

  ///to view pdf in pdf viewer in device 'react-native-share'
  const ViewPDF = async () => {
    try {
      // Get the path to the downloaded PDF file
      const pdfPath = first;
      // Check if the file exists
      const fileExists = await RNFS.exists(pdfPath);
      if (fileExists) {
        // Define the options for opening the PDF
        const options = {
          type: 'application/pdf',
          url: `file://${pdfPath}`,
          showAppsToView: true,
        };
        // Open the PDF file with the default PDF viewer
        await Share.open(options);
      } else {
        console.log('PDF file does not exist.');
      }
    } catch (error) {
      console.error('Error opening PDF:', error);
    }
  };
  ///view pdf in next screen
  const ViewPDFInScreen = () => {
    navigation.navigate('pdfviewer', {pdfUri: first});
  };
  ////to share pdf 'react-native-share'
  const SharePDF = async () => {
    try {
      if (first) {
        await Share.open({
          url: `file://${first}`,
          type: 'application/pdf',
          title: 'Open PDF',
        });
      } else {
        console.warn('PDF URI is not available');
      }
    } catch (error) {
      console.error('Error opening PDF:', error);
    }
  };
  return (
    <View>
      {!first && <Button title="Convert to PDF" onPress={convertToPDF} />}
      {first && (
        <>
          <Button title="View PDF in screen" onPress={ViewPDFInScreen} />
          {/* <Button title="Share PDF" onPress={SharePDF} /> */}
          {/* <Button title="view PDF" onPress={ViewPDF} /> */}
          {/* <Button title="Open PDF" onPress={openPDFViewer} /> */}
        </>
      )}
    </View>
  );
};

export default HTMLToPDFConverter;
