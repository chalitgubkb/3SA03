                               /*ส่วนของการ เรียกใช้ตัวแปร*/
                               import { StyleSheet } from 'react-native';

                               const Styles = StyleSheet.create({
                                container: {},
                                                               /////////จบ/////////
                               
                               
                                 /*กำหนดรูปแบบของหน้าแจ้งสภาพภูมิอากาศ*/
                                 view: {
                                   backgroundColor: '#FF6699',
                                   width: '90%',
                                   marginLeft: '5%',
                                   marginRight: '5%',
                                   padding: 2,
                                   borderRadius: 25,
                                   marginBottom: 35,
                                   
                                 },
                               /*******************/
                               
                               /*กำหนดรูปแบบของสีพื้นหลังและค่าพื้นหลังในหน้า Choose a zip Code*/
                                 ok: {
                                   backgroundColor: '#3399FF',
                                   justifyContent: 'flex-end',
                                   alignItems: 'center',
                                   paddingRight: 50,
                                   padding: 10,
                                 },
                                 zipcode: {
                                   backgroundColor: '#FF6666',
                                   width: '80%',
                                   marginLeft: '15%',
                                   padding: 25,
                                   borderRadius: 35,
                                   marginBottom: 35,
                                   alignItems: 'center',
                                   flexDirection:'row',
                                   justifyContent:'center',
                                 },
                               /*******************/
                               
                               
                                  /*กำหนดขนาดและสีตัวอักษร (Wenther) ที่อยู่ตรงกลางด้านบนของหน้าแรก*/
                                 headerTitleNav: {
                                   width: '100%',
                                   fontSize: 20,
                                   color: '#651bd1',
                                   textAlign: 'center',
                                   fontWeight: 'bold',
                                 },
                                  /*******************/
                               
                                /*กำหนดรูปขนาดและสีของปุ่ม Chance Zip ที่อยู่ในหน้าแรกมุ่มขวาบน*/
                               
                                 headerRightNav: {
                                   paddingRight: 15,
                                   backgroundColor: '#823576',
                                   fontSize: 15,
                                   color: '#17a2b8',
                                   fontWeight: 'bold',
                                   
                                 },
                                 /*******************/
                               
                               
                               
                                 /*กำหนดรูปขนาดตัวเลขอุณหภูมิ ของหน้าแจ้งสภาพภูมิอากาศ*/
                               
                                 day: {
                                   fontSize: 17,
                                   textAlign: 'center',
                                   backgroundColor: '#FF33CC',
                                   width: '90%',
                                   marginLeft: '5%',
                                   marginRight: '5%',
                                   padding: 2,
                                   borderRadius: 25,
                                   marginBottom: 35,
                                   
                                   
                               
                                 },
                               
                               
                                 containerMain: {
                                   marginBottom: 5,
                                   alignItems: 'center',
                                 },
                               
                                 main: {
                                   fontSize: 15,
                                 },
                               
                               
                                 containerDesc: {
                                   marginTop: 5,
                                   width: '90%',
                                   marginLeft: '50%',
                                 },
                                 
                               
                                 desc: {
                                   fontSize: 18,
                                   color: '#ffffff',
                                 },
                               
                                 temp: {
                                   textAlign: 'center',
                                   fontSize: 50,
                                   fontWeight: 'bold',
                                 },
                               
                                 sufflx: {
                                   fontSize: 30,
                                   fontWeight: 'normal',
                               
                               
                                 },
                               
                                   developer: {
                                     alignItems: 'center',
                               
                                   },
                                   
                                 
                                     /*******************/
                               });
                               
                               export default Styles