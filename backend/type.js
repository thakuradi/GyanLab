const zod = require("zod");
const Createqn = zod.object({
  question: zod.string(),
});
const CreateAns=zod.object({
    answer:zod.string()
})
module.exports = {
  Createqn,
  CreateAns
};
