"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TextAlignEnd, TextAlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Text } from "./Text";

const HEADER_ITEMS = [
  { label: "home", href: "#" },
  { label: "support", href: "#" },
  { label: "my account", href: "#" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="flex items-center justify-between w-full">
      <div className="relative">
        <div className="size-8 border-foreground rounded-full border-2" />
        <Text
          size="extra-large"
          weight="bold"
          className="absolute top-[5px] left-2.5 bg-background leading-4.5 pb-1"
        >
          excuseme
        </Text>
      </div>

      <div className="flex gap-7 items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {HEADER_ITEMS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <Text
                      size="small"
                      className="hover:underline underline-offset-4"
                    >
                      {item.label}
                    </Text>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <TextAlignEnd className="size-5" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <TextAlignJustify className="size-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </header>
  );
};
