//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { TestSuite, Test } from "jec-juta";
import { expect } from "chai";
import { OperationError } from "../../src/exceptions/OperationError";

const MESSAGE:string = "This is an error message";

@TestSuite({
  description: "Tests the OperationError class"
})
export class OperationErrorTest {

  @Test({
    description: "the OperationError should extend the Error class",
  })
  public testParentClass():void {
    const error:OperationError = new OperationError(MESSAGE);
    expect(error).to.be.an.instanceOf(Error);
  }

  @Test({
    description: "the message passed as parameter of the constructor should be accessible from the 'message' property",
  })
  public testMessage():void {
    const error:OperationError = new OperationError(MESSAGE);
    expect(error.message).to.equal(MESSAGE);
  }
}