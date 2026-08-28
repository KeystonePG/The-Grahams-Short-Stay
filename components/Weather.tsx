"use client";

import { useEffect, useState } from "react";

// Clarence Point, TAS coordinates (41°7'47"S 146°48'28"E) — Open-Meteo,
// no API key required.
const LATITUDE = -41.1297;
const LONGITUDE = 146.8078;

const WEATHER_CODES: Record<number, string> = {
  0: "Clear sky",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Foggy",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Rain showers",
  82: "Heavy rain showers",
  95: "Thunderstorm",
};

type WeatherState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; tempC: number; description: string };

export default function Weather() {
  const [state, setState] = useState<WeatherState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,weather_code&timezone=Australia%2FHobart`
    )
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const tempC = data?.current?.temperature_2m;
        const code = data?.current?.weather_code;
        if (typeof tempC !== "number") {
          setState({ status: "error" });
          return;
        }
        setState({
          status: "ready",
          tempC,
          description: WEATHER_CODES[code] ?? "Current conditions",
        });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === "loading") {
    return <p className="text-sm text-paper-200">Loading Clarence Point weather…</p>;
  }

  if (state.status === "error") {
    return null;
  }

  return (
    <p className="text-sm text-paper-200">
      <span className="font-display text-lg text-paper-50">
        {Math.round(state.tempC)}°C
      </span>{" "}
      in Clarence Point right now — {state.description.toLowerCase()}
    </p>
  );
}
