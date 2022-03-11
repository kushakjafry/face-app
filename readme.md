# Welcome to Face APP

App created on top of **face-api.js** used for detecting **face emotions** and creating **face mesh** in realtime. App uses users **webcam** to create video stream and uses models to detect faces and emotions.

# Technologies Used

### Frontend

- **React**
- **Tailwind**
- **Face-api.js**
- Inspired by **atomic design**

### Backend

- **Express.js**

## Computer Vision Functionality

AI detects **face** , **facial expressions/emotion** and generates **face mesh**.
**AI functionality is fully on frontend**.

## Why AI functionality on frontend ?

### Flow Chart if AI implemented on Backend

```mermaid
graph LR
A[Client Browser] -- Processes and sends video --> B{Express App}
B -- sends to backend AI --> C[AI on Backend]
C -- Analyzes video using AI --> B
B -- Response sent back to client --> A
```

#### Advantages

This implementation has **high accuracy** because we can use **large size models** on our backend with very **high computing power**.

#### Drawbacks

**Sending and analyzing realtime video** would lead to **more latency** and **bad user experience.**

### Flow Chart if AI implemented on Backend

```mermaid
graph LR
A[Client Browser] -- Processes and sends video --> B[AI on Frontend]
B -- Analyzes video using AI on frontend --> A
```

#### Advantages

This implementation has **low latency** because no **request are sent to backend server**. All **AI functionality** is implemented in **frontend**.

#### Drawbacks

It has **low accuracy** because we have to use **simple and small sized models** due to **limited bandwidth and computing power** on **client**.

## Running the server

Clone the repository:

```bash
git clone https://github.com/kushakjafry/face-app.git
```

## Running the Browser Examples

```bash
cd face-app
npm install
cd client
npm install
cd ..
npm start
```

Browse to http://localhost:8080/.
