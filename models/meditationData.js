//hardcoded database of meditations and associated emotions
const meditations = {
  meditations: [
    {
      id: 1,
      meditation: "First meditation",
      description: "This is the text for the first meditation.",
      emotions: ["anticipation", "gratitude", "loneliness", "love", "worry", "depression"]
    },
    {
      id: 2,
      meditation: "Second meditation",
      description: "This is the text for the second meditation.",
      emotions: ["frustration", "gratitude", "depression", "love", "worry", "grief"]
    },
    {
      id: 3,
      meditation: "Third meditation",
      description: "This is the text for the third meditation.",
      emotions: ["joy", "fear", "frustration", "guilt", "happiness", "grief"]
    }
  ]
};

module.exports = meditations;
