import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://qaurmhivfwpvegmrybdg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhdXJtaGl2ZndwdmVnbXJ5YmRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2NjAyODIsImV4cCI6MjAwMjIzNjI4Mn0.RiDlcAXe4IZC7dVG4BidjPV1QkIHtuvA5EyzAX8CiRk"
);

const form = document.getElementById("my-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = form.elements.email.value;

  const { data, error } = await supabase
    .from("New Army")
    .insert([{ Emails: email }]);

  if (error) {
    console.error(error);
  } else {
    console.log("Data inserted successfully");
  }

  return false; // Prevent the default form submission behavior
});

const btnEl = document.getElementById("menu-icon-trigger");
const headerEl = document.querySelector(".header");
btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".menu-icon-wrapper").classList.toggle("open");
  headerEl.classList.toggle("open");
});
