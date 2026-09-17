"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {IoClose} from "react-icons/io5";
import {cn} from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef(({className, ...props}, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className,
        )}
        {...props}
    />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(({className, children, ...props}, ref) => (
    <DialogPortal>
        <DialogOverlay/>
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                "fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100vw-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-line bg-surface p-0 shadow-2xl",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                className,
            )}
            {...props}
        >
            {children}
            <DialogPrimitive.Close
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-primary/80 text-white/70 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
                <IoClose className="text-lg"/>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef(({className, ...props}, ref) => (
    <DialogPrimitive.Title ref={ref} className={cn("h3 text-white", className)} {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef(({className, ...props}, ref) => (
    <DialogPrimitive.Description ref={ref} className={cn("text-sm text-white/60", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {Dialog, DialogTrigger, DialogClose, DialogContent, DialogTitle, DialogDescription};
