//this is a typscript file 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var facebook_profile_about = /** @class */ (function () {
    function facebook_profile_about(firstName, lastName) {
        var _this = this;
        this.userName = function () {
            return _this.firstName + " " + _this.lastName;
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return facebook_profile_about;
}());
var overview = /** @class */ (function (_super) {
    __extends(overview, _super);
    function overview(firstName, lastName, workplace, designation, currentCity, hometown, mobile, dateOfBirth) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.getAge = function () {
            var timeDiff = Math.abs(Date.now() - _this.dateOfBirth);
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
            return age;
        };
        _this.getWorkingplace = function () {
            return _this.workplace;
        };
        _this.getDesignation = function () {
            return _this.designation;
        };
        _this.setNewDesignation = function (designation) {
            return _this.designation = designation;
        };
        _this.getCurrentlocation = function () {
            return _this.currentCity;
        };
        _this.getHometown = function () {
            return _this.hometown;
        };
        _this.getMobileNo = function () {
            return _this.mobile;
        };
        _this.setNewMobileNo = function (mobile) {
            return _this.mobile = mobile;
        };
        _this.workplace = workplace;
        _this.designation = designation;
        _this.currentCity = currentCity;
        _this.hometown = hometown;
        _this.mobile = mobile;
        _this.dateOfBirth = dateOfBirth;
        return _this;
    }
    return overview;
}(facebook_profile_about));
var work_education = /** @class */ (function (_super) {
    __extends(work_education, _super);
    function work_education(firstName, lastName, workplace, designation, professinolSkill, collage, school) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.getProfessinolskill = function () {
            return _this.professinolSkill;
        };
        _this.getCollageDetail = function () {
            return _this.collage;
        };
        _this.getschoolDetail = function () {
            return _this.school;
        };
        _this.workplace = workplace;
        _this.designation = designation;
        _this.professinolSkill = professinolSkill;
        _this.collage = collage;
        _this.school = school;
        return _this;
    }
    return work_education;
}(facebook_profile_about));
var contact_and_basic_info = /** @class */ (function (_super) {
    __extends(contact_and_basic_info, _super);
    function contact_and_basic_info(firstName, lastName, mobilePhone, email, websites, skype) {
        if (email === void 0) { email = []; }
        var _this = _super.call(this, firstName, lastName) || this;
        _this.email = [];
        _this.addnewEmail = function () {
            var emailId = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                emailId[_i] = arguments[_i];
            }
            var newEmail = emailId;
            _this.email = _this.email.concat(newEmail);
            return _this.email;
        };
        _this.getwebaddress = function () {
            console.log(_this.websites);
        };
        _this.getskypecontact = function () {
            console.log(_this.Skype);
        };
        _this.mobilePhone = mobilePhone;
        _this.email = email;
        _this.websites = websites;
        _this.Skype = skype;
        return _this;
    }
    return contact_and_basic_info;
}(facebook_profile_about));
var detailsAboutYou = /** @class */ (function (_super) {
    __extends(detailsAboutYou, _super);
    function detailsAboutYou(firstName, lastName, aboutYou, otherNames, FavouriteQuotes, bloodGroup) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.displayQuote = function () {
            return _this.FavouriteQuotes;
        };
        _this.replaceQuote = function (FavouriteQuotes) {
            return _this.FavouriteQuotes = FavouriteQuotes;
        };
        _this.getDetailaboutYou = function () {
            console.log(_this.aboutYou);
        };
        _this.getBloodgroupDetail = function () {
            console.log(_this.bloodGroup);
        };
        _this.aboutYou = aboutYou;
        _this.otherNames = otherNames;
        _this.FavouriteQuotes = FavouriteQuotes;
        _this.bloodGroup = bloodGroup;
        return _this;
    }
    return detailsAboutYou;
}(facebook_profile_about));
//display user name
var User = new facebook_profile_about("Shubham", "Rajput");
console.log(User.userName());
var d = new Date("1994-04-18T18:03:40.887"); //storing date of birth
var overviewdetail = new overview("Shubham", "Rajput", "Tata consultancy services- Pune", "Assitent sustem engineer", "Pune", "itarsi", 8871452098, d);
//display user age from birthday
console.log(overviewdetail.getAge());
//disply working location
console.log(overviewdetail.getWorkingplace());
//get and set other user info
console.log(overviewdetail.getDesignation());
console.log(overviewdetail.setNewDesignation("System engineer"));
console.log(overviewdetail.getCurrentlocation());
console.log(overviewdetail.getHometown());
console.log(overviewdetail.getMobileNo());
console.log(overviewdetail.setNewMobileNo(8944793600));
var details_Work_eduction = new work_education("Shubham", "Rajput", "Tata consultancy services- Pune", "Assitent sustem engineer", "product support executive", "oriental inst. of science and technolgy, bhopal", "kendriya vidyalaya no 02 cpe itarsi");
//get eduction details
console.log(details_Work_eduction.getProfessinolskill());
console.log(details_Work_eduction.getCollageDetail());
console.log(details_Work_eduction.getschoolDetail());
var details_contact_andbasic_info = new contact_and_basic_info("Shubham", "Rajput", 8871452098, ["shubham.kumar0264@yahoo.com"], "https://shub119.github.io/", "shubham.rajput25");
//details from class contacts and info
console.log(details_contact_andbasic_info.addnewEmail("shubham.rajput02@gmail.com"));
console.log(details_contact_andbasic_info.addnewEmail("shubham.kumar@barclayscorp.com"));
details_contact_andbasic_info.getwebaddress();
details_contact_andbasic_info.getskypecontact();
var details_aboutYou = new detailsAboutYou("Shubham", "Rajput", "cool and charm boy", "raju", "God judges us by our thoughts and deeds, not by what others say about us........!!!!!!", "B+");
//calling methods
console.log(details_aboutYou.displayQuote());
console.log(details_aboutYou.replaceQuote("I dont know what to say here...!!! :) "));
details_aboutYou.getDetailaboutYou();
details_aboutYou.getBloodgroupDetail();
/// end of the program
