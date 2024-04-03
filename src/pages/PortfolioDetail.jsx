import React from "react";
import portfolio from "/assets/icons/portfolio.png";
import { Link } from "react-router-dom";

export const PortfolioDetail1 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Debat Pilpres 2019 Inf. System
        </h1>
      </div>

      <div className="mt-12">
        <img src={portfolio} alt="..." className="" />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
            <p className="text-lg ">
              Ajang debat dalam rangkaian kegiatan pemilihan presiden ( pilpres)
              merupakan acara yang diharapkan dapat memperlihatkan visi misi
              calon presiden dan calon wakil presiden, termasuk penguasaan isu
              yang dibahas. Momen debat tentu saja perlu dimanfaatkan untuk
              menarik hati rakyar agar nantinya bisa menentukan pilihan.
              Berbagai materi debat dikemas dengan apik oleh masing-masing tim
              sukses masing-masing kubu. Indi Technology dipercaya oleh KPU RI
              untuk membangun Sistem Registrasi dalam penyelenggaraan acara
              Debat Pilpres 2019 . Sistem registrasi ini merupakan pengamanan
              untuk mem-filter tamu undangan yang sesuai untuk masuk area debat.
              Sistem ini dilengkapi keamanan enkripsi melalui qrcode dan
              pengamanan melalui pemindaian kamera.
            </p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={"/portfolio"}>
          Back
        </Link>
      </div>
    </section>
  );
};

export const PortfolioDetail2 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Amalia Cosmetics Ecommerce
        </h1>
      </div>

      <div className="mt-12">
        <img src={portfolio} alt="..." className="" />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
            <p className="text-lg mb-4">
              Amalia Cosmetics merupakan website ecommerce yang menjual kosmetik
              kecantikan. Amalia berpijak di atas kecantikan holistik yang
              menyinergikan tiga elemen:
            </p>
            <p className="text-lg mb-4">
              ⚪ Halal beauty
              <br />
              Mengispirasi wanita muslim modern untuk mentaati kaidah islami
              termasuk dalam pemakaian kosmetik Amalia merupakan kosmetik halal
              yang hanya menggunakan bahan alami berkualitas tinggi, melalui
              proses produksi berteknologi tinggi dengan cara yang halal.
            </p>
            <p className="text-lg mb-4">
              ⚪ Luxury beauty <br />
              membentuk kepercayaan diri sesuai tuntutan gaya hidup berkelas
              Amalia merepresentasikan wanita mandiri bergaya elegan dan mandiri
            </p>
            <p className="text-lg mb-4">
              ⚪ Beauty by giving <br />
              Berbagi manfaat untuk sekitar Amalia memberi insipirasi untuk
              mengembangkan kebaikan hati melalui kegiatan amal /zakat atau
              sedekah.
            </p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={"/portfolio"}>
          Back
        </Link>
      </div>
    </section>
  );
};

export const PortfolioDetail3 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">AhwalNote App</h1>
      </div>

      <div className="mt-12">
        <img src={portfolio} alt="..." className="" />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
            <p className="text-lg mb-4">
              AhwalNote adalah sebuah aplikasi islami yang dapat membantu
              pengguna dalam menyikapi suatu keadaan atau kondisi sesuai dengan
              tuntunan Al-quran dan hadits.
            </p>
            <p className="text-lg mb-4">
              Dalam bahasa arab, kata Ahwal (أحوال) adalah bentuk jamak dari
              kata haal (حال) yang artinya adalah keadaan atau kondisi yang
              berhubungan dengan kejadian atau seseorang. Sedangkan Note dalam
              bahasa inggris artinya adalah catatan, sehingga AhwalNote bisa
              diartikan dengan catatan keadaan dari seseorang.
            </p>
            <p className="text-lg mb-4">
              Fitur-fitur yang disediakan : <br />
              ★ Catatan Keadaan <br />
              Pengguna dapat menuliskan keadaan yang akan menampilkan ayat
              Al-quran atau hadist yang berkaitan.
            </p>
            <p className="text-lg mb-4">
              ★ Riwayat dan Favorit <br />
              Menyimpan daftar keadaan yang pernah dituliskan
            </p>
            <p className="text-lg mb-4">
              ★ Kategori <br />
              Mengelompokan ayat Quran dan Hadist menjadi kategori-kategori yang
              dapat dibaca setiap saat. kategori-kategori tersebut seperti
              kebesaran Allah, adab rasul, keutamaan alquran, pergaulan,
              sedekah, ilmu, orang tua, sholat, kumpulan doa harian dan
              lain-lain
            </p>
            <p className="text-lg mb-4">
              ★ Berbagi <br />
              Memungkinkan pengguna membagikan keadaan, arti dari ayat Al quran
              ataupun hadist lewat pesan maupun sosial media
            </p>
            <p className="text-lg mb-4">
              ★ TexttoSpeech <br />
              Memungkinkan pengguna mendengarkan suara dari ayat Quran atau
              hadist yang tersedia. disarankan menggunakan Google TextToSpeech
              agar dapat menikmati fitur texttospeech lebih baik.
            </p>
            <p className="text-lg mb-4">
              ★Notifikasi Harian <br />
              Pengguna akan menerima notifikasi nasihat islam tiap harinya
              secara acak dari ayat Quran dan Hadist
            </p>
            <p className="text-lg mb-4">
              ★Widget <br />
              Pengguna dapat menambahkan widget ahwal note pada homescreen.
            </p>
            <p className="text-lg mb-4">
              ★Ramadhan <br />
              Berisi kumpulan ayat al-quran dan hadist mengenai berkah bulan
              ramadhan, seperti adab puasa, sunnah tarawih, turunnya al-quran
              dan malam lailatul qadr
            </p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={"/portfolio"}>
          Back
        </Link>
      </div>
    </section>
  );
};

export const PortfolioDetail4 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">Denny AK Attorney</h1>
      </div>

      <div className="mt-12">
        <img src={portfolio} alt="..." className="" />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
            <p className="text-lg ">
              DAK attorney is an Indonesia lawyer firm headquartered in Jakarta,
              that serve legal and law advocation. DAK attorney is focus on
              helping small communities who are entangled with undue legal
              cases. Founded in 2009 by Denny Andrian K in South Jakarta. Denny
              AK Attorney service legal consultans have worked with many of law
              cases. We have professional, honest and hardworking career. We
              believe that everyone deserves simple and affordable access to
              legal services and helps you identify the little and big ways the
              law can make your life better.
            </p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={"/portfolio"}>
          Back
        </Link>
      </div>
    </section>
  );
};

export const PortfolioDetail5 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          PINA Web Development
        </h1>
      </div>

      <div className="mt-12">
        <img src={portfolio} alt="..." className="" />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Non-Government Budget Investment Financing or Pembiayaan Investasi Non-Anggaran Pemerintah ( PINA ) is a facilitation scheme aimed to accelerate the private investment financing of national strategic projects, which source of funding is originated from non-government budget (non-APBN/APBD) and is fully supported by government policies.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={"/portfolio"}>
          Back
        </Link>
      </div>
    </section>
  );
};

export const PortfolioDetail6 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Rimbun Web Development
        </h1>
      </div>

      <div className="mt-12">
        <img src={portfolio} alt="..." className="" />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Rimbun Landscape as a green decor, urban farming and landscape service, wants to make urban communities easy to grow plants in limited spaces. They provide innovative, simple and practical products and services to grow anywhere, by anyone to increase green space growth and urban food security in cities throughout Indonesia and South East Asia. Rimbun got award from IdeaJam 2018 business incubation as The Most Improved Business.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={"/portfolio"}>
          Back
        </Link>
      </div>
    </section>
  );
};

export const PortfolioDetail7 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          GDG Devfest 2016
        </h1>
      </div>

      <div className="mt-12">
        <img src={portfolio} alt="..." className="" />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg mb-4">DevFests are community-led, developer events hosted by GDG chapters around the globe focused on community building and learning about Google’s technologies. Each DevFest is inspired by and uniquely tailored to the needs of the developer community and region that hosts it.</p>
              <p className="text-lg mb-4">While no two DevFests will be exactly alike, each at its core is powered by a shared belief that when developers come together to exchange ideas, amazing things can happen.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={"/portfolio"}>
          Back
        </Link>
      </div>
    </section>
  );
};

export const PortfolioDetail8 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">Website project 8</h1>
      </div>

      <div className="mt-12">
        <img src={portfolio} alt="..." className="" />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
            <p className="text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              atque tempore cumque esse exercitationem autem accusantium. Nam
              quisquam doloremque inventore atque voluptatibus ratione, nihil,
              expedita unde iusto delectus dolor accusantium maxime quae eius
              quaerat accusamus, quasi autem optio dignissimos tempore.
            </p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={"/portfolio"}>
          Back
        </Link>
      </div>
    </section>
  );
};
