import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

function SettingsPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstTeam: "A Takımı",
    secondTeam: "B Takımı",
  });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("firstTeam", form.firstTeam);
    sessionStorage.setItem("secondTeam", form.secondTeam);

    setTimeout(() => {
      navigate("/game");
    }, 1000);
  };
  return (
    <div className={styles.settingsContainer}>
      <form className={styles.settingForm}>
        <FormInput
          name="firstTeam"
          value={form.firstTeam}
          onChange={onChangeInput}
        />
        <FormInput
          name="secondTeam"
          value={form.secondTeam}
          onChange={onChangeInput}
        />

        <Button title="Oyuna Başla!" Class="btn-time" Clicked={onSubmit} />
      </form>
    </div>
  );
}

export default SettingsPage;
