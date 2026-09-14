export class Signup {


constructor (page){

this.page = page

this.firstName = page.locator('#regfirstname');
this.lastName = page.locator('#reglastname');
this.email = page.locator('#regemail');
this.telephone = page.locator('#regphone');

this.male = page.locator('input#genderMale');
this.female = page.locator('input#genderFemale');
this.others = page.locator('input#genderOther');

this.dob = page.locator('input#regdob');

this.country = page.locator('select#regcountry');

this.fashion = page.locator('input#interestFashion');
this.electronics = page.locator('input#interestElectronics');
this.sports = page.locator('input#interestSports');
this.books = page.locator('input#interestBooks');


this.photo = page.locator('input#regphoto');

this.password = page.locator('input#regpassword');
this.confirmPassword = page.locator('input#regconfirmpassword');
this.registerBtn = page.locator('button#registerBtn');




}



async register(firstName , lastName , email , telephone , gender , dob , country , interest ,photopath , password){


    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
        await this.telephone.fill(telephone);

        if(gender === "Male"){
           await this.male.check();

        }else if(gender === "Female"){
            await this.female.check();
        }else if(gender ==="Other"){
            await this.others.check();
        
        }

await this.dob.fill(dob);
await this.country.selectOption(country);

if(interest ==="Fashion"){
await this.fashion.check();
}else if (interest === "Electronics"){

    await this.electronics.check();

}else if(interest === "Sports"){
    await this.interest.check();
}

await this.photo.setInputFiles(photopath);

await this.password.fill(password);
await this.confirmPassword.fill(password);


await this.registerBtn.click();



}







}