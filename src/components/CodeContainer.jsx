export const CodeContainer = () => {
    const codeString = `void setup() {
  // put your setup code here, to run once:
  pinMode(13, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(13, HIGH);  // write 1 (5V) in 13 pin
  delay(1000);             // wait 1 second
  digitalWrite(13, LOW);   // write 0 (0V) in 13 pin
  delay(1000);             // wait 1 second
}`;
    return (
        <pre>
            <code class="language-cpp">{codeString}</code>
        </pre>
    );
};
