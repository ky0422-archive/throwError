import throwError from "..";

try {
    throwError("Error message");
} catch (err) {
    console.log(err);
}
