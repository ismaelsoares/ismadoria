"use client";

import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";

export const Photo = () => {
  return (
    <div className="w-full h-full relative ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: easeIn },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
          }}
          className="size-[298px] xl:size-[498px] mix-blend-lighten"
        >
          <Image
            src="/assets/avatar.png"
            priority
            quality={100}
            fill
            alt="avatar"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
