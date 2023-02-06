import Button from "@/components/button";
import Head from "next/head";
import { useState } from "react";
import { Addition, Subtraction, Multiplication } from "../utils/functions";

export default function Home() {
  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [result, setResult] = useState<number>();
  const addition = () => {
    const res = Addition(input1, input2);
    setResult(res);
    return res;
  };
  const subtraction = () => {
    const res = Subtraction(input1, input2);
    setResult(res);
    return res;
  };
  const multiplication = () => {
    const res = Multiplication(input1, input2);
    setResult(res);
    return res;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "input1") {
      setInput1(Number(e.target.value));
    }
    if (e.target.name === "input2") {
      setInput2(Number(e.target.value));
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <div className="flex flex-col text-center">
          <h1 className="m-2 text-2xl text-blue-400">
            This project will test cypress component test vs jest unit tests.
          </h1>
          <h2 className="m-2 text-xl text-green-500">
            Note: This is only a project to showcase setup and simulate a very
            small project with testing. The results will be obscured, as this is
            not a real environment, but hopefully it can open a discussion/prove
            something regarding the two different libraries.
          </h2>

          <div id="spacer" className="h-40" />

          <div>
            <div className="flex flex-col w-1/3 gap-6 mx-auto mt-5">
              <div className="flex gap-4 justify-center">
                <div className="flex flex-col">
                  <p>Input 1</p>
                  <input
                    className="p-2 text-center"
                    name="input1"
                    placeholder="input"
                    onChange={handleChange}
                    value={input1}
                  />
                </div>
                <div className="flex flex-col">
                  <p>Input 2</p>
                  <input
                    className="p-2 text-center"
                    name="input2"
                    placeholder="input"
                    onChange={handleChange}
                    value={input2}
                  />
                </div>
              </div>
              <p data-cy="result">{result && `Result = ${result}`}</p>
            </div>
            <div className="flex justify-center">
              <Button onClick={addition}>Addition</Button>
              <Button onClick={subtraction}>Subtraction</Button>
              <Button onClick={multiplication}>Multiplication</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
