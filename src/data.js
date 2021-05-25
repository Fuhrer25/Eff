import ui from './assets/uiux.png';
import autocad from './assets/autocad.jpg';
import branding from './assets/branding.jpg';
import iu from './assets/iu.jpg';
import web from './assets/web.jpg';
import training from './assets/training.jpg';
import webVideo from './assets/web.mp4';
import brandingVideo from './assets/branding.mp4';

import React, { useState, createContext } from 'react';

export const CourseContext = createContext();

export const CourseProvider = props => {
    const [courses, setCourses] = useState([
        {
            id: 1,
            image: ui,
            title: 'UI & UX დიზაინის კურსი',
            description: `ააიპ "განათლება თავისუფლებისთვის" იწყებს UI & UX დიზაინის კურსზე მიღებასკურსის განმავლობაში შეისწავლით
            მუშაობას სხვადასხვა ხელსაწყოებში.გაიგებთ UI/UX დიზაინის პრინციპს,მთავარ სამიზნეს და მის გავლენას,დღევანდელ ციფრულ პროდუქტში.`,
            price: '₾300',
            desc: <p>ააიპ "განათლება თავისუფლებისთვის" იწყებს UI & UX დიზაინის კურსზე მიღებასკურსის განმავლობაში შეისწავლით მუშაობას სხვადასხვა ხელსაწყოებში.გაიგებთ UI/UX დიზაინის პრინციპს,მთავარ სამიზნეს და მის გავლენას,დღევანდელ ციფრულ პროდუქტში.კურსის დასრულების შემდეგ,შეგეძლებათ დიზაინის დამოუკიდებლად აწყობა როგორც ვებ,ასევე მობაილ აპლიკაციისთვის.

            კურსის აღწერა:
            <br />ლექცია #1 - გაცნობა და კურსის შესავალი
            <br />ლექცია #2 - UI დიზაინი : Tools და UI სტილები 
            <br />ლექცია #3 - UI დიზაინი : ფერები/სურათები/ფონტები/ფოქტოგრამები
            <br />ლექცია #4 - Mobile : Responsive/Adaptive
            <br />ლექცია #5 - Wireframing & Prototyping
            <br />ლექცია #6 - ვებ ფორმები & დიზაინ სისტემა
            <br />ლექცია #7 - UX რისერჩის საფუძვლები & UX ვორკშოპის ორგანიზება
            <br />ლექცია #8 - დიზაინ აზროვნება & ეჯაილი
            <br />ლექცია #9 - პერსონალური პორფოლიოს შექმნა/ფრილანს პროექტების მოძიების გზები
            <br />ლექცია #10 - რისფონსივ ნავიგაცია
            <br />ლექცია #11 - კომპლექსური ინტეფეისის რისფონსივ მდგომარეობა
            <br />ლექცია #12 - საფინალო პროექტის პრეზენტაცია
            
            კურსს გაუძღვება UI & UX დიზაინერი ლაშა მურადაშვილი
            &nbsp; <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKx1I9JT_U2mmjQUoQKs3mTdiaBL7NGN4uKsN9lq0PIPb7dA/viewform">
            დასარეგისტრირებლად გადადით ბმულზე
            </a>
            </p>
        },
        {
            id: 2,
            image: autocad,
            title: 'ავტოკადის პრაქტიკული კურსი',
            description: `ააიპ "განათლება თავისუფლებისთვის" იწყებს ავტოკადის პრაქტიკულ კურსზე მსმენელების მიღებას
            სასწავლო კურსის მიზანი:
            სტუდენტმა შეიძინოს Autodesk AutoCAD-ის საშუალებით პროექტირების, დაგეგმარების, ნახაზების შედგენის, გაფორმებისა და მათი პრეზენტაციის უნარ-ჩვევები
            `,
            desc: <p>
                `ააიპ "განათლება თავისუფლებისთვის" იწყებს ავტოკადის პრაქტიკულ კურსზე მსმენელების მიღებას
            სასწავლო კურსის მიზანი:
            სტუდენტმა შეიძინოს Autodesk AutoCAD-ის საშუალებით პროექტირების, დაგეგმარების, ნახაზების შედგენის, გაფორმებისა და მათი პრეზენტაციის უნარ-ჩვევები
            კურსის დასრულების შემდეგ შეძლებთ: 
            მარტივი და რთული პრიმიტივების ხაზვა და რედაქტირება; ნახაზზე ანოტაციური ობიექტების დატანა და რედაქტირება; ნახაზების ოპტიმიზაციისთვის და ეფექტური მუშაობისთვის ბლოკებით, ატრიბუტებით და ფენებით სარგებლობა; შესრულებული პროექტის ბეჭდვა, პუბლიკაცია პრეზენტაციებისთვის; 
            შეძენილი მხაზველობითი უნარების გამოყენებით ელექტრონული პროექტების შედგენა, ამ პროექტებში შედგენილი ობიექტების ფართების, პერიმეტრების, სიგრძეების და სიგანეების დადგენა; განდეტალების და შესაბამისი ანგარიშის სიების და ცხრილების შედგენა; შესრულებული სამუშაოს პუბლიკაცია და დამკვეთისთვის წარდგენა საჭირო ნორმებით და სტანდარტებით.
            ჯამში ჩატარდება 12 ლექცია ლექციებს გაუძღვება ტაბიძე ვასილი,ავტოდესკ- ავტოკადის სერტიფიცირებული პროფესიონალი.        
            კურსის საფასური: 300₾
            კურსის მოკლე სილაბუსი : 
            
            <br />1-კომპიუტერული დაპროექტების შესავალი - ავტოკადის სამუშაო სივრცე, ახალი ნახაზის დაწყება და შენახვა, მხაზველობითი ერთეულები, მისი საზღვრები, ბადე, მიბმა, ნახაზის დათვალიერების და მოძრაობის ელემენტები
            <br />2-კოორდინატთა სისტემა ავტოკადში - ობიექტის წერტილებისთვის კოორდინატთა მითითების მეთოდები, პრიმიტივების ხაზვის დაწყება, მათი სახასიათო წერტილებზე მიბმა, ხაზვის რეჟიმების დაყენება
            <br />3-მარტივი პრიმიტივების ხაზვა - წერტილი, წერტილებით ობიექტების დაყოფა ტოლ ნაწილებად, სხივი, წრფე, წრეწირი, რკალი, ელიფსი, მრუდი, და ა.შ.
            <br />4-რთული პრიმიტივების ხაზვა - პოლიხაზები, მრავალკუთხედები, ღრუბელი, მულტიხაზები და მათ რედაქტირების მეთოდები
            <br />5-ობიექტების რედაქტირების მეთოდები: გადაადგილება, წაშლა, კოპირება, სარკული ასახვა და ობიექტის სახელურებით მანიპულირება 
            <br />6-ობიექტების რედაქტირების მეთოდები 2: ტირაჟირება, მართკუთხა, პოლარული და ტრასირებული მასივის შექმნა, მოკვეთა, დაგრძელება
            <br />7-ობიექტების რედაქტირების მეთოდები 3: სხვადასხვა გეომეტრიული ობიექტის მობრუნება, მასშტაბირება, გაჭიმვა და დანაწევრება
            <br />8-ობიექტების რედაქტირების მეთოდები 4: შესრულებული ობიექტების გაწყვეტა, მათი შეერთება, ნაზოლი და შეუღლება
            <br />9-ანოტაციის ობიექტების შექმნა: ტექსტების, წარწერების, ცხრილების, მულტილიდერების სტილების შექმნა და დატანა ნახაზზე, სხვადასხვა ობიექტის თვისებების ცვლა
            <br />10-ბლოკები, ატრიბუტები, ფენები - მათი შექმნა, ჩასმა და რედაქტირება, ბლოკების და ფენების ორგანიზება პროექტებში ეფექტური მუშაობისთვის.
            <br />11-ზომები, დაშტრიხვა - მათი ნაირსახეობები და მათი დატანა ნახაზზე, დაშტრიხვა და ფერების გრადიენტული შერჩევა, სივრცის შემოსაზღვრა
            <br />12-ფურცლის სივრცე - ფურცლის სივრცეში პარამეტრების დაყენება, ნახაზის ხედების შექმნა და მასშტაბირება, ფორმატის ბეჭდვა და პუბლიკაცია,
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDubPelOwCxKREhUbUKH0zEuqknrtsHYcnoCjJ4fMdZq5jgg/viewform">
            სარეგისტრაციოდ ეწვიეთ:
            </a>` </p>,
            price: '₾300'
        },
        {
            id: 3,
            image: training,
            title: 'სამართლებრივი დოკუმენტების მომზადება',
            description: `
            მოგეხსენებათ, რომ თითოეული იურისტისთვის უმნიშვნელოვანესია პრაქტიკული გამოცდილება. სწორედ ამიტომ ორგანიზაცია "განათლება თავისუფლებისთვის" და “პასუხი შენს სამართლებრივ შეკითხვაზე” გთავაზობთ ერთობლივ ექსპრესს კურსს. 
           კურსს გაუძღვებიან პრაქტიკოსი იურისტები და ორგანიზაცია "პასუხი შენს სამართლებრივ შეკითხვაზე" დამფუძნებლები- მარიამ ბარამიძე და გიორგი ბერიძე. 
           აღნიშნული კურსის ფარგლებში დამსწრეებს ექნებათ შესაძლებლობა, რომ აითვისონ საპროცესო დოკუმენტების შედგენის უნარ-ჩვევები, ასევე გაეცნონ დოკუმენტების სწორი სამართლებრივი ანალიზის საფუძვლებს და კლიენტის ინტერესებზე მორგებულ სახელშეკრულებო სტანდარტის შექმნის/რედაქტირების/ანალიზის პროცესს, კურსზე ასევე განხილული იქნება კერძო სამართლის აქტუალური საკითხები. 
           `,
            desc: <p>მოგეხსენებათ, რომ თითოეული იურისტისთვის უმნიშვნელოვანესია პრაქტიკული გამოცდილება. სწორედ ამიტომ ორგანიზაცია "განათლება თავისუფლებისთვის" და “პასუხი შენს სამართლებრივ შეკითხვაზე” გთავაზობთ ერთობლივ ექსპრესს კურსს. 
            კურსს გაუძღვებიან პრაქტიკოსი იურისტები და ორგანიზაცია "პასუხი შენს სამართლებრივ შეკითხვაზე" დამფუძნებლები- მარიამ ბარამიძე და გიორგი ბერიძე. 
            აღნიშნული კურსის ფარგლებში დამსწრეებს ექნებათ შესაძლებლობა, რომ აითვისონ საპროცესო დოკუმენტების შედგენის უნარ-ჩვევები, ასევე გაეცნონ დოკუმენტების სწორი სამართლებრივი ანალიზის საფუძვლებს და კლიენტის ინტერესებზე მორგებულ სახელშეკრულებო სტანდარტის შექმნის/რედაქტირების/ანალიზის პროცესს, კურსზე ასევე განხილული იქნება კერძო სამართლის აქტუალური საკითხები. 
            კურსის წარმატებით გავლის შემდეგ მონაწილეები 2 თვის განმავლობაში გაივლიან სტაჟირებას ჩვენს ორგანიზაციაში, იმუშავებენ რეალურ საქმეებზე, შესაბამისად, მათ ექნებათ იურიდიული კონსულტაციის მიცემის შესაძლებლობა მენტორის მითითებების შესაბამისად. 
            დამსწრეთა რაოდენობა შეზღუდულია!
             კურსის დასრულების შემდეგ გაიცემა ორენოვანი სერტიფიკატი!
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9-jMSBngJapKxXkR3GViwqKuFIE7OA50Q_QLIoXYj5A5qzw/viewform">
            👇სარეგისტრაციოდ მიყევით ბმულს
            </a></p>,
            price: 'უფასო'
        },
        {
            id: 4,
            image: iu,
            title: 'უფასო იურიდიული კონსულტაცია',
            description: `მოგესალმებით, ააიპ " განათლება თავისუფლებისთვის" გთავაზობთ უფასო იურიდიულ კონსულტაციას!
            თუ გაქვთ სამართლებრივი პრობლემა და საჭიროებთ დახმარებას შეავსეთ აღნიშნული ველი და ჩვენი იურისტები დაგიკავშირდებიან!
            `,
            desc: <p>მოგესალმებით, ააიპ " განათლება თავისუფლებისთვის" გთავაზობთ უფასო იურიდიულ კონსულტაციას!
            თუ გაქვთ სამართლებრივი პრობლემა და საჭიროებთ დახმარებას შეავსეთ აღნიშნული ველი და ჩვენი იურისტები დაგიკავშირდებიან!
            
            <br />-კორპორაციული სამართალი
            <br />-საფინანსო და საინვესტიციო სამართალი
            <br />-სასამართლო დავები და არბიტრაჟი
            <br />-უძრავი ქონება და სამშენებლო სექტორი
            <br />-ინტელექტუალური საკუთრების სამართალი
            <br />-რეგულაციებთან შესაბამისობა
            <br />-ენერგეტიკა და ინფრასტრუქტურა 
            <br />-შრომის სამართალი
            <br />-სახელმწიფო შესყიდვის (ტენდერის) სამართლებრივი მხარდაჭერა­­
            <br />-საოჯახო სამართალი
            <br />
            ასევე გთხოვთ ყურადღებით შეავსოთ ელექტრონული ფოსტისა და მობილური ტელეფონის ველი ვინაიდან ძირითადად ამ ორ საკომუნიკაციო საშუალებას ვიყენებთ. 
            პასუხის მიღების სავარაუდო დრო გამოგზავნიდან 3 - 5 სამუშაო დღე 
            კითხვის გამოსაგზავნად მიყევით ლინკს: 
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxI73S24Q892qvpHqJDjfBr2Jxfb5pXyXhjPcwUuTL-w2_tg/viewform">
            </a>
            `</p>,
            price: 'უფასო'
        },
        {
            id: 5,
            image: web,
            title: 'პროგრამირების პროფესიული კურსი',
            description: `ააიპ "განათლება თავისუფლებისთვის" იწყებს პროგრამირების პროფესიულ კურსზე მსმენელების მიღებას.
            სწავლება იყოფა სამ ნაწილად:
            1) შესავალი JavaScript-ში, სინტაქსი, DOM-თან მუშაობა, http მოთხოვნები.
            2) NodeJs შესავალი და სინტაქსი, ExpressJs შესავალი, სინტაქსი, ბაზასთან მუშაობა, პრაქტიკული მაგალითები
            3)ReactJs შესავალი, სინტაქსი, პრაქტიკული მაგალითები`,
            desc: <p>ააიპ "განათლება თავისუფლებისთვის" იწყებს პროგრამირების პროფესიულ კურსზე მსმენელების მიღებას.
            სწავლება იყოფა სამ ნაწილად:
            <br />1) შესავალი JavaScript-ში, სინტაქსი, DOM-თან მუშაობა, http მოთხოვნები.
            <br />2) NodeJs შესავალი და სინტაქსი, ExpressJs შესავალი, სინტაქსი, ბაზასთან მუშაობა, პრაქტიკული მაგალითები
            <br />3)ReactJs შესავალი, სინტაქსი, პრაქტიკული მაგალითები
            <br />ტრენერი: შოთიკო სამთელაძე
            <br />კურსის ხანგრძლივობა 3 თვე.
            <br />ჯამში ჩატარდება 22 შეხვედრა, კვირაში ორჯერ: ორშაბათს და ხუთშაბათს საღამოს 19:00 საათზე.
            <br />კურსის დასრულების შემდეგ თქვენ შეძლებთ დამოუკიდებლად შექმნათ და მართოთ ნებისმიერი სირთულის ვებ გვერდი. 
            ასევე დასრულების შემდეგ გაიცემა ორნოვანი სერტიფიკატი.
            <br /><a href="https://docs.google.com/forms/d/e/1FAIpQLSfyBscijolw2iQJjsC8rJC7YHQzLY8Z6lqn8_JDN3GAw9pBLQ/viewform">
            დამატებითი ინფორმაციისთვის და რეგისტრაციისათვის მიყევით ბმულს </a></p>,
            price: '₾600',
            video: webVideo
        },
        {
            id: 6,
            image: branding,
            title: 'გრაფიკული დიზაინი + სტაჟირება!',
            description: `
            გრაფიკული დიზაინის ექსპრესს კურსის განმავლობაში დაეუფლებით Photoshop და illustrator-ს. 
            დასრულების შემდეგ შეგეძლებათ დამოუკიდებლად მუშაობა ორივე პროგრამაში.`,
            desc: <p>
            გრაფიკული დიზაინის ექსპრესს კურსის განმავლობაში დაეუფლებით Photoshop და illustrator-ს. 
            დასრულების შემდეგ შეგეძლებათ დამოუკიდებლად მუშაობა ორივე პროგრამაში. 
            კურსის ფარგლებში ასევე გვექნება ბრენდინგსა და მარკეტინგის მიმართულებით ტრენინგი რაც დაგეხმარებათ სარეკლამო პოსტერების შექმნაში. 
            კურსი განკუთვნილია დამწყები გრაფიკოსებისათვის.
            <br />ხანგრძლივობა: 1 თვე. მსმენელები მიიღება ორ ჯგუფად:
            <br />დღის ჯგუფი - ორშაბათი 12:00 საათზე და ხუთშაბათი 12:00 საათზე.
            <br />საღამოს ჯგუფი - ორშაბათი 20:00 საათზე და ხუთშაბათი 20:00 საათზე. 
            <br />შეხვედრები ჩატარდება პლატფორმა ზუმის მეშვეობით!
            <br />ტრენერი: ორგანიზაცია"განათლება თავისუფლებისთვის" უფროსი გრაფიკოსი - ნინო კაპანაძე.<br />ნინო გამოცდილი გრაფიკოსია. 
            იგი ამ ინდუსტრიაში უკვე ხუთი წელზე მეტია წარმატებით მოღვაწეობს და ჩვენს ორგანიზაციაში უკვე ათობით კურსი ჩაატარა.
            ჩვენი ორგანიზაციის მთავარი მიზანია ხელმისაწვდომი გახადოს ცოდნა ყველა მსურველისათვის და ხელი შეუწყოს მსმენელებს დასაქმებაში. სწორედ ამიტომ ტრენინგის დასრულების შემდეგ ორ საუკეთესო სტუდენტს ვაძლევთ სტაჟირების შესაძლებლობას უმცროსი გრაფიკოსის პოზიციაზე, სადაც ისინი მუშაობენ რეალურ პროეტქებზე.
            სტაჟირების დასრულების შემდეგ გაიცემა ასევე სერტიფიკატი და რეკომენდაცია.
            რეგისტრაცია
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYxa5T4R9SKt3ywLDIYR-SrHRd4sGVh4EKjFnBnRQGR1W3hA/viewform?fbclid=IwAR3k6AWtkfR-oS2gjZ5wbV9UEhUgI77hUvrGyWd_JQcIgL1RmozDa5h1kls">
            </a></p>,
            price: '₾250',
            video: brandingVideo
        }



    ]);
    return (
        <CourseContext.Provider value={[ courses, setCourses ]}>
            { props.children }
        </CourseContext.Provider>
    )
}