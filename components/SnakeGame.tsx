'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE: Position[] = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION: Direction = 'RIGHT';
const GAME_SPEED = 150;

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const directionRef = useRef(direction);

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('snakeHighScore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Generate random food position
  const generateFood = useCallback((): Position => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    // Make sure food doesn't spawn on snake
    const onSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
    return onSnake ? generateFood() : newFood;
  }, [snake]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying && e.key === ' ') {
        startGame();
        return;
      }

      if (!isPlaying) return;

      const key = e.key;
      const currentDirection = directionRef.current;

      if (key === 'ArrowUp' && currentDirection !== 'DOWN') {
        setDirection('UP');
        directionRef.current = 'UP';
      } else if (key === 'ArrowDown' && currentDirection !== 'UP') {
        setDirection('DOWN');
        directionRef.current = 'DOWN';
      } else if (key === 'ArrowLeft' && currentDirection !== 'RIGHT') {
        setDirection('LEFT');
        directionRef.current = 'LEFT';
      } else if (key === 'ArrowRight' && currentDirection !== 'LEFT') {
        setDirection('RIGHT');
        directionRef.current = 'RIGHT';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying]);

  // Game loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const gameLoop = setInterval(() => {
      setSnake(currentSnake => {
        const head = currentSnake[0];
        let newHead: Position;

        // Calculate new head position
        switch (directionRef.current) {
          case 'UP':
            newHead = { x: head.x, y: head.y - 1 };
            break;
          case 'DOWN':
            newHead = { x: head.x, y: head.y + 1 };
            break;
          case 'LEFT':
            newHead = { x: head.x - 1, y: head.y };
            break;
          case 'RIGHT':
            newHead = { x: head.x + 1, y: head.y };
            break;
        }

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          setIsPlaying(false);
          return currentSnake;
        }

        // Check self collision
        if (currentSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          setIsPlaying(false);
          return currentSnake;
        }

        const newSnake = [newHead, ...currentSnake];

        // Check if food eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(prev => {
            const newScore = prev + 10;
            if (newScore > highScore) {
              setHighScore(newScore);
              localStorage.setItem('snakeHighScore', newScore.toString());
            }
            return newScore;
          });
          setFood(generateFood());
          return newSnake; // Don't remove tail (snake grows)
        }

        // Remove tail
        newSnake.pop();
        return newSnake;
      });
    }, GAME_SPEED);

    return () => clearInterval(gameLoop);
  }, [isPlaying, gameOver, food, generateFood, highScore]);

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setFood({ x: 15, y: 15 });
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  return (
    <div className="bg-retro-black border-4 border-retro-lime p-4 md:p-6 inline-block shadow-retro">
      {/* Title */}
      <div className="text-center mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-retro-lime font-pixel mb-2">
          🐍 SNAKE GAME 🐍
        </h3>
        <div className="flex justify-between text-retro-cyan font-mono text-sm md:text-base">
          <div>SCORE: <span className="text-retro-yellow">{score}</span></div>
          <div>HIGH: <span className="text-retro-magenta">{highScore}</span></div>
        </div>
      </div>

      {/* Game Board */}
      <div
        className="relative bg-retro-darkgray border-2 border-retro-gray"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className={`absolute ${index === 0 ? 'bg-retro-lime' : 'bg-retro-cyan'} border border-retro-black`}
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute bg-retro-red border border-retro-yellow animate-pulse"
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
          }}
        />

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-retro-black bg-opacity-90 flex items-center justify-center">
            <div className="text-center">
              <p className="text-retro-red text-2xl font-bold font-pixel mb-4 animate-blink">
                GAME OVER!
              </p>
              <p className="text-retro-yellow text-lg font-mono mb-4">
                Final Score: {score}
              </p>
              <button
                onClick={startGame}
                className="bg-retro-lime text-retro-black px-6 py-2 font-bold hover:bg-retro-yellow transition-colors border-2 border-retro-black shadow-retro"
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}

        {/* Start Screen */}
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 bg-retro-black bg-opacity-90 flex items-center justify-center">
            <div className="text-center">
              <p className="text-retro-cyan text-lg font-mono mb-4">
                Press SPACE or click to start
              </p>
              <p className="text-retro-gray text-sm font-mono mb-4">
                Use ARROW KEYS to move
              </p>
              <button
                onClick={startGame}
                className="bg-retro-lime text-retro-black px-8 py-3 font-bold hover:bg-retro-yellow transition-colors border-2 border-retro-black shadow-retro animate-pulse"
              >
                START GAME
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="mt-4 text-retro-gray text-xs md:text-sm font-mono text-center">
        <p>⬆️ ⬇️ ⬅️ ➡️ Arrow keys to move</p>
        <p className="text-retro-yellow mt-1">Eat red squares · Don't hit walls or yourself!</p>
      </div>
    </div>
  );
}
