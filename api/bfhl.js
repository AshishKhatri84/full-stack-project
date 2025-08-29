export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ is_success: false, error: "Only POST allowed" });
  }

  // ===== CONFIG (edit these to your details) =====
  const FULL_NAME = "ashish_khatri";  // lowercase full name
  const DOB = "01012000";             // ddmmyyyy
  const EMAIL = "ashish@gmail.com";
  const ROLL_NO = "ABCD123";
  // ==============================================

  try {
    const data = req.body.data;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: "Request body must contain { data: [] }" });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;

    let letters = []; // to build concat_string

    data.forEach(item => {
      if (typeof item === "number" || /^-?\d+$/.test(item)) {
        const num = Number(item);
        sum += num;
        if (num % 2 === 0) even_numbers.push(String(item));
        else odd_numbers.push(String(item));
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        for (const ch of item) letters.push(ch);
      } else {
        special_characters.push(String(item));
      }
    });

    const reversed = letters.reverse().join("");
    const concat_string = reversed
      .split("")
      .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NO,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string
    });
  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
}
