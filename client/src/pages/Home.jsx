import SearchButton from "../components/SearchButton.jsx";
import TextArea from "../components/TextArea.jsx";
import axios from "axios";
import { useState } from "react";
const Home = () => {
  const [category_id, setCategory_id] = useState(1);
  const [hadith_id, setHadith_id] = useState(2962);
  const [hadith, setHadith] = useState("");
  // console.log(hadith_id);
  // console.log(category_id);

  function randomGenerator(arr) {
    var random = Math.floor(Math.random() * arr.length);
    // console.log("random:", random);
    // setCategory_id(arr[random].id);
    return random;
  }
  // useEffect(() => {
  //   axios
  //     .get(`https://hadeethenc.com/api/v1/categories/list/?language=en`)
  //     .then((response) => {
  //       console.log(response.data.length);
  //       console.log(randomGenerator(response.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const getHadith = async () => {
    await axios
      .get(`https://hadeethenc.com/api/v1/categories/list/?language=en`)
      .then((response) => {
        // console.log(response.data.length);
        let random = randomGenerator(response.data);
        setCategory_id(response.data[random].id);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .get(
        `https://hadeethenc.com/api/v1/hadeeths/list/?language=en&category_id=${category_id}&page=1&per_page=30`
      )
      .then(function (response) {
        // console.log(response.data.data);
        let random = randomGenerator(response.data.data);
        setHadith_id(response.data.data[random].id);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .get(
        `https://hadeethenc.com/api/v1/hadeeths/one/?language=en&id=${hadith_id}`
      )
      .then((response) => {
        console.log(response.data);
        setHadith(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="flex flex-col w-full justify-center">
      <TextArea hadith={hadith} />
      <SearchButton getHadith={getHadith} />
    </main>
  );
};

export default Home;
